/**
 * mongoose操作类(封装mongodb)
 */
const mongoose = require("mongoose");
const logger = require("pomelo-logger").getLogger("mongodb-log");
const models = require("./schema");
const option = require("./config");

const dbURL = option.db_url + option.db_name; // 数据库连接地址

class Db {
  static getInstance() {
    /*单例模式  多次实例化实例不共享的问题*/
    if (!Db.instance) {
      Db.instance = new Db();
    }
    return Db.instance;
  }

  constructor() {
    this.MongoConnection = null; //初始化connection实例
    this.connect(); //实例化的时候连接数据库
  }

  /**
   * 连接数据库
   */
  connect() {
    return new Promise((resolve, reject) => {
      mongoose.connect(dbURL, { useNewUrlParser: true }, err => {
        if (err) {
          logger.error("Mongoose connected error " + err);
          reject(err);
        } else {
          logger.info("Connection success!");
          if (!this.MongoConnection) {
            // 假如没有connection实例，创建实例
            this.MongoConnection = mongoose.connection;
            this.MongoConnection.on("connected", function (err) {
              if (err) logger.error("Database connection failure");
            });
            this.MongoConnection.on("error", function (err) {
              logger.error("Mongoose connected error " + err);
            });
            this.MongoConnection.on("disconnected", function () {
              logger.error("Mongoose disconnected");
            });
            process.on("SIGINT", () => {
              this.MongoConnection.close(function () {
                logger.info("Mongoose disconnected through app termination");
                process.exit(0);
              });
            });
          }
          resolve(this.MongoConnection);
        }
      });
    });
  }

  /**
   * 保存数据
   * @param {String} collectionName  表名
   * @param {Object} json            保存的文档
   */
  save(collectionName, json) {
    return new Promise((resolve, reject) => {
      const collectionModel = models[collectionName];
      if (collectionModel) {
        const collection = new collectionModel(json);
        collection.save((err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      } else {
        logger.error("invalid collectionName");
        reject({ msg: "invalid collectionName" });
      }
    });
  }

  /**
   *  更新数据库
   * @param {String} collectionName  表名
   * @param {Object} conditions      查询条件
   * @param {Object} json            更新的文档
   */
  update(collectionName, conditions, json) {
    return new Promise((resolve, reject) => {
      const collectionModel = models[collectionName];
      if (collectionModel) {
        collectionModel.update(
          conditions,
          { $set: json },
          { multi: true, upsert: true },
          (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          }
        );
      } else {
        logger.error("invalid collectionName");
        reject({ msg: "invalid collectionName" });
      }
    });
  }

  /**
   *  删除数据库
   * @param {String} collectionName  表名
   * @param {Object} conditions      查询条件
   */
  remove(collectionName, conditions) {
    return new Promise((resolve, reject) => {
      const collectionModel = models[collectionName];
      if (collectionModel) {
        collectionModel.deleteOne(conditions, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      } else {
        logger.error("invalid collectionName");
        reject({ msg: "invalid collectionName" });
      }
    });
  }

  /**
   *  查询数据库
   * @param {String} collectionName  表名
   * @param {Object} conditions      查询条件
   *  @param {Object} query      分页
   */
  find(collectionName, conditions, query, sort) {
    return new Promise((resolve, reject) => {
      const collectionModel = models[collectionName];
      let skipNum = 0;
      let limitNum = 0;
      if (query) {
        // 需要转number
        limitNum = parseInt(query.limit); //一页条数
        skipNum = parseInt(query.limit * query.page); // 跳转到第几条开始
      }
      if (collectionModel) {
        collectionModel
          .find(conditions)
          .sort(sort)
          .skip(skipNum)
          .limit(limitNum)
          .exec((err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          });
      } else {
        logger.error("invalid collectionName");
        reject({ msg: "invalid collectionName" });
      }
    });
  }

  /**
   *  查询数据库  查询单一
   * @param {String} collectionName  表名
   * @param {Object} conditions      查询条件
   */
  findOne(collectionName, conditions) {
    return new Promise((resolve, reject) => {
      const collectionModel = models[collectionName];
      if (collectionModel) {
        collectionModel.findOne(conditions, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      } else {
        logger.error("invalid collectionName");
        reject({ msg: "invalid collectionName" });
      }
    });
  }
}

module.exports = Db.getInstance();

/**
 * Mogodb中使用save和insert方式插入数据的区别
 * 插入数据的时候不添加一个主键时，系统会随机分配一个主键
 * 若新增的数据中存在主键，则再次插入相同的主键时insert() 会提示错误，而save() 则更改原来的内容为新内容。
 */
