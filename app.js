angular.module('app',[])
    .config(function($httpProvider){

    })
    .controller('CY',function($scope,$http){

        //下面是简单的链接
        //$http.get('http://127.0.1')
        // .success(function(resp){
        //        console.log(resp);
        // })

        //下面是添加操作(只要把参数传递过去就ok)
        $scope.name="";
        $scope.id="";
        $scope.adduer=function(){
          $http.post('你的url地址',{name:$scope.name})
             .success(function(resp){
                 if(resp.success){
                     alert("添加成功");
                 }
             })
        };

        //删除一个用户（同理是传递一个参数过去）
        $scope.deleteuser=function(){
            $http.post('你的url',{id:$scope.id})
            .success(function(resp){
                if(resp.issuccess){

                }
            })
        }
    });

