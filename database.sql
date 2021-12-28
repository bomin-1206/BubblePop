create database date;
use date;
/*회원가입/로그인 db*/
create table users(
    id varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL PRIMARY KEY,
    password varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*카페,레스토랑,장소 위도,경도,이름 db*/
create table CAFE(
    name varchar(20) NOT NULL PRIMARY KEY,
    x_location decimal(16,12) NOT NULL,
    y_location decimal(16,12) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create table RESTAURANT(
    name varchar(20) NOT NULL PRIMARY KEY,
    x_location decimal(16,12) NOT NULL,
    y_location decimal(16,12) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create table PLACE(
    name varchar(20) NOT NULL PRIMARY KEY,
    x_location decimal(16,12) NOT NULL,
    y_location decimal(16,12) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;