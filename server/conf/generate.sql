CREATE TABLE `adoption`.`cat_list` (
  `cat_id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '猫咪id,从1开始。自动增加',
  `breed` VARCHAR(45) NOT NULL COMMENT '品种',
  `color` VARCHAR(45) NOT NULL COMMENT '花色',
  `name` VARCHAR(45) NOT NULL COMMENT '名字',
  `gender` CHAR(4) NOT NULL COMMENT '性别',
  `age` VARCHAR(45) NOT NULL COMMENT '年龄',
  `nature` VARCHAR(90) NOT NULL COMMENT '性格',
  `vaccine` INT SIGNED NOT NULL DEFAULT 0 COMMENT '疫苗情况',
  `expelling` INT SIGNED NOT NULL DEFAULT 0 COMMENT '驱虫情况',
  `neutering` INT SIGNED NOT NULL DEFAULT 0 COMMENT '绝育情况',
  `origin` VARCHAR(200) NOT NULL COMMENT '来源',
  `deposit` INT SIGNED NOT NULL DEFAULT -1 COMMENT '是否需要押金',
  `remark` VARCHAR(1000) NOT NULL COMMENT '备注信息',
  PRIMARY KEY (`cat_id`),
  UNIQUE INDEX `cat_id_UNIQUE` (`cat_id` ASC));


/* 若插入负数，则需将UNSIGNED改为SIGNED */

ALTER TABLE `adoption`.`cat_list` 
CHANGE COLUMN `gender` `gender` INT NOT NULL DEFAULT 2 COMMENT '性别：0-母，1-公，2-未知' ,
CHANGE COLUMN `vaccine` `vaccine` INT NOT NULL DEFAULT 2 COMMENT '疫苗情况： 0-未接种， 1-已接种， 2-未知' ,
CHANGE COLUMN `expelling` `expelling` INT NOT NULL DEFAULT 2 COMMENT '驱虫情况： 0-未驱虫，1-已驱虫，2-未知' ,
CHANGE COLUMN `neutering` `neutering` INT NOT NULL DEFAULT 2 COMMENT '绝育情况： 0-未绝育， 1-已绝育， 2-未知' ,
CHANGE COLUMN `deposit` `deposit` INT NOT NULL DEFAULT 0 COMMENT '是否需要押金： 0-不需要， 1-需要' ;

