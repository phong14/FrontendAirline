﻿(function () {
    'use strict';


    angular.module("myApp").service("AdminService", function ($http) {
        this.GetChangBay = function ()
        {
            return $http({
                method: "get",
                url: "http://localhost:33790/Flights/ChangBays",
            }).success(function (sur) {
                return sur.data
            });
        }

        this.AddChangBay = function (noidi, noiden, ngay, gio, hang, mucgia, soluongghe, giaban)
        {
            return $http({
                method: "post",
                url: "http://localhost:33790/Flights/ThemChangBay",
                params:
                    {
                        noidi: noidi,
                        noiden: noiden,
                        ngay: ngay,
                        gio: gio,
                        hang: hang,
                        mucgia: mucgia,
                        soluong: soluongghe,
                        giaban: giaban
                    }
            }).success(function (result) {
                return result.data;
            });
        }
    });
})();