/**
 * Created by Administrator on 2016/7/25.
 */
/*var imgUrl = 'rabbit.png';
var positions = [
        '0 -854',
        '-174 -852',
        '-349 -852',
        '-524 -852',
        '-698 -852',
        '-873 -848'
];
var ele = document.getElementById('rabbit');

animation(ele,positions,imgUrl);


function animation(ele,positions,imgUrl){

    ele.style.backgroundImage = 'url(images/'+imgUrl+')';
    ele.style.backgroundRepeat = 'no-repeat';

    var index = 0;

    function run(){
        var position = positions[index].split(' ');
        ele.style.backgroundPosition = position[0]+'px '+position[1]+'px';

        index++;
        if(index >= positions.length){
            index = 0;
        }
        setTimeout(run,80);
    }
    run();
}*/

//帧动画类
function Animation(){

}


/*同步预加载图片
* @param 图片数组
* */
Animation.prototype.loadImage = function(imgList){

};

/*异步定时任务    改变图片位置实现帧动画
* @param dom对象
* @param postion位置
* @param 图片地址
* */
Animation.prototype.changePosition = function(ele,positions,imgUrl){

};




