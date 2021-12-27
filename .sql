create database date;
use date;
/*회원가입/로그인 db*/
create table users(
          id varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL PRIMARY KEY,
          password varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
      )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;