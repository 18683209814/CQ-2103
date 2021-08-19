// var o1={
//     name:'丽丽',
//     age:18
// }
// name=丽丽&age=18&

function ajax(obj){
    //创建需要操作的默认参数
    var defaultInfo={
        url:'', //请求地址
        type:'get',//请求方式
        async:true,//是否异步
        data:'',//参数内容
        success:function(){},//成功的回调函数
        error:function(){} //失败的回调函数
    }
    //判断obj中是否传入了地址
    if(!obj.url){
        throw new Error("必须要传入请求地址")
    }
    //把传入的参数赋值给默认参数
    for(var attr in obj){
        defaultInfo[attr]=obj[attr]
    }

    //创建ajax对象
    var xhr=new XMLHttpRequest()
    //判断请求数据
    if(defaultInfo.data){
        //判断请求方式
        if(defaultInfo.type.toUpperCase()=="GET"){
             //配置链接信息
            xhr.open(defaultInfo.type,defaultInfo.url+'?'+defaultInfo.data,defaultInfo.async)
            //发送请求
            xhr.send()
        }else if(defaultInfo.type.toUpperCase()=="POST"){
            //配置链接信息
            xhr.open(defaultInfo.type,defaultInfo.url,defaultInfo.async)
            //设置请求头信息
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
            //发送请求
            xhr.send(defaultInfo.data)
        }
    }else{
        //配置链接信息
        xhr.open(defaultInfo.type,defaultInfo.url,defaultInfo.async)
        //发送请求
        xhr.send()
    }

    //检查ajax状态
    xhr.onreadystatechange=function(){
        //判断ajax状态是否结束
        if(xhr.readyState==4){
            //判断http状态是否成功
            if(xhr.status==200){
                //调用成功的回调函数
                defaultInfo.success(xhr.responseText)
            }else{
                defaultInfo.error("请求失败")
            }
        }
    }
}

//把ajax封装到promise中
function promiseAjax(obj){
    //创建promise对象
    return new Promise(function(resolve,reject){
            //创建需要操作的默认参数
        var defaultInfo={
            url:'', //请求地址
            type:'get',//请求方式
            async:true,//是否异步
            data:'',//参数内容
            success:function(){},//成功的回调函数
            error:function(){} //失败的回调函数
        }
        //判断obj中是否传入了地址
        if(!obj.url){
            throw new Error("必须要传入请求地址")
        }
        //把传入的参数赋值给默认参数
        for(var attr in obj){
            defaultInfo[attr]=obj[attr]
        }

        //创建ajax对象
        var xhr=new XMLHttpRequest()
        //判断请求数据
        if(defaultInfo.data){
            //判断请求方式
            if(defaultInfo.type.toUpperCase()=="GET"){
                //配置链接信息
                xhr.open(defaultInfo.type,defaultInfo.url+'?'+defaultInfo.data,defaultInfo.async)
                //发送请求
                xhr.send()
            }else if(defaultInfo.type.toUpperCase()=="POST"){
                //配置链接信息
                xhr.open(defaultInfo.type,defaultInfo.url,defaultInfo.async)
                //设置请求头信息
                xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
                //发送请求
                xhr.send(defaultInfo.data)
            }
        }else{
            //配置链接信息
            xhr.open(defaultInfo.type,defaultInfo.url,defaultInfo.async)
            //发送请求
            xhr.send()
        }

        //检查ajax状态
        xhr.onreadystatechange=function(){
            //判断ajax状态是否结束
            if(xhr.readyState==4){
                //判断http状态是否成功
                if(xhr.status==200){
                    //调用成功的回调函数
                    resolve(xhr.responseText)
                }else{
                    reject("请求失败")
                }
            }
        }
    })
}