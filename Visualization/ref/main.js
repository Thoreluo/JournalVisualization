
//去除默认的鼠标事件,便于之后添加右击事件
document.oncontextmenu = function () { return false; };

/*Parallel*****************************************************************************/
//initialize the chart to be displayed
var myParallel = echarts.init(document.getElementById("parallel"));


var dataCA = [['A', '4', '1.6'], ['A', '3', '1.723'], ['A', '2', '2.661'], ['A', '4', '1.181'], ['A', '4', '1.033'], ['B', '4', '0.585'], ['B', '4', '1.118'], ['B', '4', '0.82'], ['B', '4', '0.7140000000000001'], ['B', '4', '0.5'], ['B', '4', '1.245'], ['B', '4', '1.32'], ['B', '3', '1.0'], ['B', '4', '0.944'], ['B', '4', '0.6829999999999999'], ['C', '4', '0.942'], ['C', '4', '1.263'], ['C', '2', '2.43'], ['C', '4', '0.703'], ['C', '4', '0.471'], ['C', '3', '1.561'], ['C', '4', '1.088'], ['C', '4', '0.705'], ['C', '4', '0.361'], ['C', '4', '0.738']];
var dataCN = [['A', '3', '2.186'], ['A', '2', '3.672'], ['A', '2', '2.456'], ['B', '4', '0.705'], ['B', '4', '0.982'], ['B', '3', '1.4480000000000002'], ['B', '3', '1.446'], ['B', '3', '2.298'], ['B', '2', '2.925'], ['C', '3', '1.66'], ['C', '3', '2.099'], ['C', '3', '1.296'], ['C', '4', '0.624'], ['C', '3', '2.331'], ['C', '3', '1.538'], ['C', '4', '0.943'], ['C', '4', '1.0'], ['C', '4', '0.922'], ['C', '4', '1.006']];
var dataIS = [['A', '3', '1.592'], ['A', '2', '2.441'], ['A', '4', '1.617'], ['B', '4', '0.759'], ['B', '3', '1.64'], ['B', '4', '0.7809999999999999'], ['B', '5', '0.0'], ['C', '5', '0.0'], ['C', '5', '0.0'], ['C', '4', '1.013'], ['C', '5', '0.0'], ['C', '5', '0.0'], ['C', '5', '0.0'], ['C', '5', '0.0'], ['C', '4', '0.8059999999999999'], ['D', '4', '1.279']];
var dataSE = [['A', '4', '1.148'], ['A', '3', '1.513'], ['A', '3', '1.516'], ['B', '3', '1.3119999999999998'], ['B', '3', '1.393'], ['B', '2', '2.365'], ['B', '4', '0.473'], ['B', '3', '1.569'], ['B', '4', '1.357'], ['B', '4', '0.7290000000000001'], ['B', '3', '1.4240000000000002'], ['B', '4', '1.105'], ['B', '4', '0.828'], ['B', '4', '0.99'], ['B', '4', '0.652'], ['B', '4', '1.082'], ['C', '4', '0.556'], ['C', '4', '0.24'], ['C', '5', '0.0'], ['C', '5', '0.0'], ['C', '4', '0.622'], ['C', '5', '0.0'], ['C', '4', '0.787'], ['C', '4', '0.952']];
var dataDB = [['A', '4', '0.633'], ['A', '4', '0.977'], ['A', '3', '2.476'], ['A', '3', '1.744'], ['B', '4', '1.0'], ['B', '3', '2.0'], ['B', '3', '1.5'], ['B', '2', '2.714'], ['B', '2', '2.892'], ['B', '4', '1.061'], ['B', '4', '1.3969999999999998'], ['B', '2', '3.364'], ['B', '3', '1.832'], ['B', '3', '2.1590000000000003'], ['B', '3', '1.277'], ['B', '3', '1.702'], ['B', '3', '1.061'], ['D', '3', '1.786'], ['C', '4', '0.8'], ['C', '3', '2.1630000000000003'], ['C', '4', '0.605'], ['C', '4', '0.8959999999999999'], ['C', '4', '0.526'], ['C', '3', '2.065'], ['C', '3', '2.05'], ['C', '5', '0.0'], ['C', '4', '0.621'], ['C', '4', '0.764'], ['C', '4', '0.12'], ['C', '5', '0.0'], ['C', '4', '1.0'], ['C', '2', '2.595']];
var dataCST = [['A', '4', '0.873'], ['A', '4', '0.841'], ['A', '2', '1.737'], ['B', '4', '0.7759999999999999'], ['B', '4', '0.855'], ['B', '2', '1.879'], ['B', '4', '0.795'], ['B', '4', '0.342'], ['B', '4', '0.521'], ['B', '4', '1.132'], ['B', '4', '1.246'], ['B', '4', '1.5830000000000002'], ['B', '2', '1.219'], ['B', '4', '1.03'], ['B', '4', '0.758'], ['B', '4', '0.643'], ['C', '4', '0.5820000000000001'], ['C', '4', '0.722'], ['C', '4', '0.722'], ['C', '4', '0.6579999999999999'], ['C', '5', '0.0'], ['C', '4', '0.605'], ['C', '3', '1.358'], ['C', '4', '0.585'], ['C', '4', '0.51'], ['C', '4', '0.569'], ['C', '4', '0.7929999999999999'], ['C', '4', '0.7190000000000001']];
var dataCG = [['A', '1', '4.218'], ['A', '2', '3.735'], ['A', '3', '1.4'], ['B', '4', '0.982'], ['B', '3', '2.149'], ['B', '4', '1.092'], ['B', '3', '1.5419999999999998'], ['B', '4', '0.821'], ['B', '2', '2.254'], ['B', '2', '2.536'], ['B', '3', '1.5719999999999998'], ['B', '2', '2.687'], ['B', '3', '1.038'], ['C', '4', '0.5479999999999999'], ['C', '4', '1.12'], ['C', '4', '0.589'], ['C', '3', '0.816'], ['C', '4', '0.86'], ['C', '3', '1.661'], ['C', '3', '1.53'], ['C', '4', '1.41'], ['C', '4', '1.331'], ['C', '2', '2.063'], ['C', '3', '1.602'], ['C', '4', '1.06'], ['D', '4', '0.72'], ['D', '4', '0.639']];
var dataAI = [['A', '2', '3.333'], ['A', '1', '6.077000000000001'], ['A', '2', '4.27'], ['A', '2', '2.45'], ['B', '4', '0.561'], ['B', '2', '1.584'], ['B', '3', '2.017'], ['B', '3', '2.134'], ['B', '3', '1.5'], ['B', '2', '3.6'], ['B', '2', '1.873'], ['B', '2', '1.584'], ['B', '1', '4.9430000000000005'], ['B', '1', '5.908'], ['B', '1', '6.7010000000000005'], ['B', '1', '4.854'], ['B', '2', '2.696'], ['B', '4', '1.659'], ['B', '4', '2.113'], ['B', '4', '1.526'], ['B', '3', '1.719'], ['B', '3', '1.626'], ['B', '2', '3.216'], ['B', '2', '3.399'], ['B', '4', '1.4169999999999998'], ['C', '5', '0.0'], ['C', '4', '1.215'], ['C', '3', '2.142'], ['C', '3', '1.042'], ['C', '4', '0.722'], ['C', '3', '1.324'], ['C', '4', '1.125'], ['C', '2', '2.604'], ['C', '2', '2.3680000000000003'], ['C', '4', '0.947'], ['C', '2', '2.9810000000000003'], ['C', '2', '2.0980000000000003'], ['C', '4', '1.0'], ['C', '4', '0.573'], ['C', '4', '0.873'], ['C', '3', '1.766'], ['C', '4', '0.631'], ['C', '5', '0.0'], ['C', '4', '0.885'], ['C', '3', '2.05'], ['C', '1', '6.085'], ['C', '4', '0.915'], ['C', '4', '1.0'], ['C', '4', '1.703'], ['C', '2', '3.325'], ['C', '5', '0.0'], ['C', '3', '1.272'], ['C', '4', '1.31'], ['C', '4', '0.8859999999999999'], ['C', '3', '1.492'], ['C', '3', '1.747'], ['C', '2', '2.392'], ['C', '4', '1.104'], ['C', '3', '1.586'], ['C', '3', '1.63'], ['C', '5', '0.0']];
var dataHCI = [['A', '4', '1.293'], ['A', '3', '1.476'], ['B', '3', '1.784'], ['B', '2', '3.7'], ['B', '4', '0.889'], ['B', '2', '2.292'], ['B', '4', '1.26'], ['B', '3', '1.8'], ['C', '4', '1.211'], ['C', '3', '1.719'], ['C', '3', '1.4980000000000002']];
var dataOthers = [['A', '1', '5.629'], ['A', '3', '1.803'], ['B', '2', '5.766'], ['B', '1', '8.399'], ['B', '5', '0.0'], ['B', '2', '4.587'], ['B', '2', '3.756'], ['B', '2', '3.36'], ['B', '2', '2.5340000000000003'], ['B', '2', '2.028'], ['B', '2', '2.696'], ['B', '4', '0.475'], ['B', '2', '3.428'], ['B', '4', '0.885'], ['B', '4', '1.0'], ['B', '3', '1.539'], ['C', '3', '2.435'], ['C', '4', '0.88'], ['C', '3', '2.228'], ['C', '5', '2.439'], ['C', '3', '1.609'], ['C', '4', '0.843'], ['C', '2', '4.565'], ['C', '4', '0.66']];

var schema = [
    { name: 'CCF', index: 0, text: 'CCF分区' },
    { name: 'CSA', index: 1, text: 'CSA分区' },
    { name: 'IF_2015', index: 2, text: '2015IF' }
];

option_parallel = {
    //backgroundColor: '#fafafa',
    legend: {
        show: false,
        data: ['计算机体系结构', '计算机网络', '网络信息安全', '软件工程',
            '数据库/数据挖掘/内容检索', '计算机科学理论', '计算机图形学与多媒体',
            '人工智能', '人机交互与普适计算', '交叉/综合/新兴']
    },
    /*tooltip: {
        show: true,
        trigger: "axis",
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj[0].value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
            + obj[0].seriesName + ' ' + value[0] + '日期：'
            + value[7]
            + '</div>'
            + schema[1].text + '：' + value[1] + '<br>'
            + schema[2].text + '：' + value[2] + '<br>'
            + schema[3].text + '：' + value[3] + '<br>'
            + schema[4].text + '：' + value[4] + '<br>'
            + schema[5].text + '：' + value[5] + '<br>'
            + schema[6].text + '：' + value[6] + '<br>';
        }
    },*/
    animation: false,
    parallelAxis: [
        { dim: 0, name: schema[0].text, type: 'category', data: ['D', 'C', 'B', 'A'] },
        { dim: 2, name: schema[2].text, min: 0, max: 8, /*type: 'log', logBase:10*/ },
        { dim: 1, name: schema[1].text, type: 'category', data: ['5', '4', '3', '2', '1'] }
        //type: 'category', data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
        //inverse: true, max: 31, nameLocation: 'start'
    ],
    visualMap: {
        show: false,
        min: 0,
        max: 6,
        dimension: 2,
        inRange: {
            color: ['#eea2a2', '#57c6e1', '#b49fda'],//'#bbc1bf',
            //colorAlpha: [0, 0.19, 0.42, 0.79, 1]
        }
    },
    parallel: {
        left: '7%',
        right: '18%',
        top: '5%',
        bottom: 100,
        //坐标轴的共有属性
        parallelAxisDefault: {
            type: 'value',
            nameLocation: 'end',
            nameGap: 15,
            nameTextStyle: {
                color: 'rgb(0,0,0)',
                fontSize: 12
            },
            axisLine: {
            },
            axisTick: {
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: 'rgb(0,0,0)'
                }
            }
        }
    },
    series: [
        {
            name: '计算机体系结构',
            type: 'parallel',
            lineStyle: {
                normal: {
                    width: 0.5,
                    opacity: 0.8
                }
            },
            data: dataCA,
            smooth: true
        },
        {
            name: '计算机网络',
            type: 'parallel',
            lineStyle: {
                normal: {
                    width: 0.5,
                    opacity: 0.8
                }
            },
            data: dataCN,
            smooth: true
        },
        {
            name: '网络信息安全',
            type: 'parallel',
            lineStyle: {
                normal: {
                    width: 0.5,
                    opacity: 0.8
                }
            },
            data: dataIS,
            smooth: true
        },
        {
            name: '软件工程',
            type: 'parallel',
            lineStyle: {
                normal: {
                    width: 0.5,
                    opacity: 0.8
                }
            },
            data: dataSE,
            smooth: true
        },
        {
            name: '数据库/数据挖掘/内容检索',
            type: 'parallel',
            lineStyle: {
                normal: {
                    width: 0.5,
                    opacity: 0.8
                }
            },
            data: dataDB,
            smooth: true
        },
        {
            name: '计算机科学理论',
            type: 'parallel',
            lineStyle: {
                normal: {
                    width: 0.5,
                    opacity: 0.8
                }
            },
            data: dataCST,
            smooth: true
        },
        {
            name: '计算机图形学与多媒体',
            type: 'parallel',
            lineStyle: {
                normal: {
                    width: 0.5,
                    opacity: 0.8
                }
            },
            data: dataCG,
            smooth: true
        },
        {
            name: '人工智能',
            type: 'parallel',
            lineStyle: {
                normal: {
                    width: 0.5,
                    opacity: 0.8
                }
            },
            data: dataAI,
            smooth: true
        },
        {
            name: '人机交互与普适计算',
            type: 'parallel',
            lineStyle: {
                normal: {
                    width: 0.5,
                    opacity: 0.8
                }
            },
            data: dataHCI,
            smooth: true
        },
        {
            name: '交叉/综合/新兴',
            type: 'parallel',
            lineStyle: {
                normal: {
                    width: 0.5,
                    opacity: 0.8
                }
            },
            data: dataOthers,
            smooth: true
        }
    ]
};

//绘制初始图表
myParallel.setOption(option_parallel);

//选择方向后
function ensure() {
    //var option = myParallel.getOption();
    var selectLegend = myParallel.getOption().legend[0].data;
    var selectedNum = 0;
    var obj = {};
    var val = [];

    //登记每个check所选状态
    for (i = 0; i < 10; i++)
        val[i] = document.getElementById('chk' + i).checked;

    //赋值给obj，以便于修改option
    i = -1;
    for (var key in selectLegend) {
        if (++i > 10) return;
        if (val[i] == true) selectedNum++;
        obj[selectLegend[key]] = val[i];
    }

    //重绘平行坐标图
    option_parallel.legend.selected = obj;
    myParallel.setOption(option_parallel);
    //console.log(obj);

    //更改input的显示值
    if (selectedNum == 0)
        document.getElementById('case1').value = '-选择CCF方向-';
    else if (selectedNum == 10)
        document.getElementById('case1').value = 'CCF方向已全选';
    else
        document.getElementById('case1').value = '已选择' + selectedNum + '个方向';

    //隐藏选择框
    document.getElementById("select1").style.display = "none";
}


/*Graph******************************************************************************/
//initialize the chart to be displayed
var myGraph = echarts.init(document.getElementById("graph")/*, null, {renderer: 'svg'}*/);
myGraph.showLoading();

//graph相关信息，最必要的数据，后面的是不同CCF分类下的点和线
var graph = {
    categories: [
        { name: '期刊' }, { name: 'CCF A区' }, { name: 'CCF B区' }, { name: 'CCF C区' }, { name: 'CCF暂未收录' },
        { name: 'CSA 1区' }, { name: 'CSA 2区' }, { name: 'CSA 3区' }, { name: 'CSA 4区' }, { name: 'CSA暂未收录' }
    ],
    nodes: [
        { name: 'CCF A区', id: 'CCFA', category: 1, symbolSize: 30 },
        { name: 'CCF B区', id: 'CCFB', category: 2, symbolSize: 30 },
        { name: 'CCF C区', id: 'CCFC', category: 3, symbolSize: 30 },
        { name: 'CCF暂未收录', id: 'CCFD', category: 4, symbolSize: 30 },

        { name: 'CSA 1区', id: 'CSA1', category: 5, symbolSize: 30 },
        { name: 'CSA 2区', id: 'CSA2', category: 6, symbolSize: 30 },
        { name: 'CSA 3区', id: 'CSA3', category: 7, symbolSize: 30 },
        { name: 'CSA 4区', id: 'CSA4', category: 8, symbolSize: 30 },
        { name: 'CSA暂未收录', id: 'CSA5', category: 9, symbolSize: 30 }
    ],
    links: [
    ]
};

var graph_CA = {
    nodes: [
        {
            "id": "TOCS",
            "name": "TOCS",
            "fullName": "ACM Transactions on Computer Systems",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tocs/",
            "CCF": "A",
            "CSA": 4,
            "IF_2015": 1.6,
            "category": 0,
            "symbolSize": 28.6137422498,
            "field": "CA"
        },
        {
            "id": "TOC",
            "name": "TOC",
            "fullName": "IEEE Transactions on Computers",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tc/index.html",
            "CCF": "A",
            "CSA": 3,
            "IF_2015": 1.723,
            "category": 0,
            "symbolSize": 29.3435034912,
            "field": "CA"
        },
        {
            "id": "TPDS",
            "name": "TPDS",
            "fullName": "IEEE Transactions on Parallel and Distributed Systems",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tpds/",
            "CCF": "A",
            "CSA": 2,
            "IF_2015": 2.661,
            "category": 0,
            "symbolSize": 33.8611612033,
            "field": "CA"
        },
        {
            "id": "TCAD",
            "name": "TCAD",
            "fullName": "IEEE Transactions On Computer-Aided Design Of Integrated Circuits And System",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tcad/",
            "CCF": "A",
            "CSA": 4,
            "IF_2015": 1.181,
            "category": 0,
            "symbolSize": 25.7460768485,
            "field": "CA"
        },
        {
            "id": "TOS",
            "name": "TOS",
            "fullName": "ACM Transactions on Storage",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tos/",
            "CCF": "A",
            "CSA": 4,
            "IF_2015": 1.033,
            "category": 0,
            "symbolSize": 24.5453921627,
            "field": "CA"
        },
        {
            "id": "TACO",
            "name": "TACO",
            "fullName": "ACM Transactions on Architecture and Code Optimization",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/taco/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.585,
            "category": 0,
            "symbolSize": 19.882357581,
            "field": "CA"
        },
        {
            "id": "TAAS",
            "name": "TAAS",
            "fullName": "ACM Transactions on Autonomous and Adaptive Systems",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/taas/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.118,
            "category": 0,
            "symbolSize": 25.2497444522,
            "field": "CA"
        },
        {
            "id": "TODAES",
            "name": "TODAES",
            "fullName": "ACM Transactions on Design Automation of Electronic Systems",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/todaes/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.82,
            "category": 0,
            "symbolSize": 22.5667628567,
            "field": "CA"
        },
        {
            "id": "TECS",
            "name": "TECS",
            "fullName": "ACM Transactions on Embedded Computing Systems",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tecs/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.714,
            "category": 0,
            "symbolSize": 21.4364940845,
            "field": "CA"
        },
        {
            "id": "TRETS",
            "name": "TRETS",
            "fullName": "ACM Transactions on Reconfigurable Technology and Systems",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/trets/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.5,
            "category": 0,
            "symbolSize": 18.7179998859,
            "field": "CA"
        },
        {
            "id": "TVLSI",
            "name": "TVLSI",
            "fullName": "IEEE Transactions on VLSI Systems",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tvlsi/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.245,
            "category": 0,
            "symbolSize": 26.2300832462,
            "field": "CA"
        },
        {
            "id": "JPDC",
            "name": "JPDC",
            "fullName": "Journal of Parallel and Distributed Computing",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jpdc/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.32,
            "category": 0,
            "symbolSize": 26.773666985,
            "field": "CA"
        },
        {
            "id": "PARCO",
            "name": "PARCO",
            "fullName": "Parallel Computing",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/conf/parco/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.0,
            "category": 0,
            "symbolSize": 24.2601513196,
            "field": "CA"
        },
        {
            "id": "IJPE",
            "name": "IJPE",
            "fullName": "Performance Evaluation: An International Journal",
            "Press": "Elsevier",
            "DBLP": "http://www.journals.elsevier.com/performance-evaluation/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.944,
            "category": 0,
            "symbolSize": 23.7595289258,
            "field": "CA"
        },
        {
            "id": "JSA",
            "name": "JSA",
            "fullName": "Journal of Systems Architecture",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jsa/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.683,
            "category": 0,
            "symbolSize": 21.0828694606,
            "field": "CA"
        },
        {
            "id": "CCPE",
            "name": "CCPE",
            "fullName": "Concurrency and Computation: Practice and Experience",
            "Press": "Wiley",
            "DBLP": "http://dblp.uni-trier.de/db/journals/concurrency/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.942,
            "category": 0,
            "symbolSize": 23.7412433923,
            "field": "CA"
        },
        {
            "id": "DC",
            "name": "DC",
            "fullName": "Distributed Computing",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/dc/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.263,
            "category": 0,
            "symbolSize": 26.3627821406,
            "field": "CA"
        },
        {
            "id": "FGCS",
            "name": "FGCS",
            "fullName": "Future Generation Computer Systems",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/fgcs/",
            "CCF": "C",
            "CSA": 2,
            "IF_2015": 2.43,
            "category": 0,
            "symbolSize": 32.8844694096,
            "field": "CA"
        },
        {
            "id": "Integration",
            "name": "Integration",
            "fullName": "Integration, the VLSI Journal",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/integration/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.703,
            "category": 0,
            "symbolSize": 21.312317022,
            "field": "CA"
        },
        {
            "id": "MMEHD",
            "name": "MMEHD",
            "fullName": "Microprocessors and Microsystems: Embedded Hardware Design",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/mam/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.471,
            "category": 0,
            "symbolSize": 18.2886710058,
            "field": "CA"
        },
        {
            "id": "JGC",
            "name": "JGC",
            "fullName": "The Journal of Grid computing",
            "Press": "Springer",
            "DBLP": "http://link.springer.com/journal/10723",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.561,
            "category": 0,
            "symbolSize": 28.3732207479,
            "field": "CA"
        },
        {
            "id": "TJSC",
            "name": "TJSC",
            "fullName": "The Journal of Supercomputing",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tjs/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.088,
            "category": 0,
            "symbolSize": 25.0059161053,
            "field": "CA"
        },
        {
            "id": "JETC",
            "name": "JETC",
            "fullName": "The ACM Journal on Emerging Technologies in Computing Systems",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jetc/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.705,
            "category": 0,
            "symbolSize": 21.334999424,
            "field": "CA"
        },
        {
            "id": "JET",
            "name": "JET",
            "fullName": "Journal of Electronic Testing-Theory and Applications",
            "Press": "Springer",
            "DBLP": "http://link.springer.com/journal/10836",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.361,
            "category": 0,
            "symbolSize": 16.4683388097,
            "field": "CA"
        },
        {
            "id": "RTS",
            "name": "RTS",
            "fullName": "Real-Time Systems",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/rts/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.738,
            "category": 0,
            "symbolSize": 21.7026588337,
            "field": "CA"
        }
    ],
    links: [
        {
            "source": "TOCS",
            "target": "CCFA"
        },
        {
            "source": "TOC",
            "target": "CCFA"
        },
        {
            "source": "TPDS",
            "target": "CCFA"
        },
        {
            "source": "TCAD",
            "target": "CCFA"
        },
        {
            "source": "TOS",
            "target": "CCFA"
        },
        {
            "source": "TACO",
            "target": "CCFB"
        },
        {
            "source": "TAAS",
            "target": "CCFB"
        },
        {
            "source": "TODAES",
            "target": "CCFB"
        },
        {
            "source": "TECS",
            "target": "CCFB"
        },
        {
            "source": "TRETS",
            "target": "CCFB"
        },
        {
            "source": "TVLSI",
            "target": "CCFB"
        },
        {
            "source": "JPDC",
            "target": "CCFB"
        },
        {
            "source": "PARCO",
            "target": "CCFB"
        },
        {
            "source": "IJPE",
            "target": "CCFB"
        },
        {
            "source": "JSA",
            "target": "CCFB"
        },
        {
            "source": "CCPE",
            "target": "CCFC"
        },
        {
            "source": "DC",
            "target": "CCFC"
        },
        {
            "source": "FGCS",
            "target": "CCFC"
        },
        {
            "source": "Integration",
            "target": "CCFC"
        },
        {
            "source": "MMEHD",
            "target": "CCFC"
        },
        {
            "source": "JGC",
            "target": "CCFC"
        },
        {
            "source": "TJSC",
            "target": "CCFC"
        },
        {
            "source": "JETC",
            "target": "CCFC"
        },
        {
            "source": "JET",
            "target": "CCFC"
        },
        {
            "source": "RTS",
            "target": "CCFC"
        },
        {
            "source": "TOCS",
            "target": "CSA4"
        },
        {
            "source": "TOC",
            "target": "CSA3"
        },
        {
            "source": "TPDS",
            "target": "CSA2"
        },
        {
            "source": "TCAD",
            "target": "CSA4"
        },
        {
            "source": "TOS",
            "target": "CSA4"
        },
        {
            "source": "TACO",
            "target": "CSA4"
        },
        {
            "source": "TAAS",
            "target": "CSA4"
        },
        {
            "source": "TODAES",
            "target": "CSA4"
        },
        {
            "source": "TECS",
            "target": "CSA4"
        },
        {
            "source": "TRETS",
            "target": "CSA4"
        },
        {
            "source": "TVLSI",
            "target": "CSA4"
        },
        {
            "source": "JPDC",
            "target": "CSA4"
        },
        {
            "source": "PARCO",
            "target": "CSA3"
        },
        {
            "source": "IJPE",
            "target": "CSA4"
        },
        {
            "source": "JSA",
            "target": "CSA4"
        },
        {
            "source": "CCPE",
            "target": "CSA4"
        },
        {
            "source": "DC",
            "target": "CSA4"
        },
        {
            "source": "FGCS",
            "target": "CSA2"
        },
        {
            "source": "Integration",
            "target": "CSA4"
        },
        {
            "source": "MMEHD",
            "target": "CSA4"
        },
        {
            "source": "JGC",
            "target": "CSA3"
        },
        {
            "source": "TJSC",
            "target": "CSA4"
        },
        {
            "source": "JETC",
            "target": "CSA4"
        },
        {
            "source": "JET",
            "target": "CSA4"
        },
        {
            "source": "RTS",
            "target": "CSA4"
        }
    ]
};
/*graph_CA.nodes.forEach(function (node) {
    node.symbolSize = node.IF_2015 * 10 + 5;
});*/

var graph_CN = {
    nodes: [
        {
            "id": "TON",
            "name": "TON",
            "fullName": "IEEE/ACM Transactions on Networking",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ton/",
            "CCF": "A",
            "CSA": 3,
            "IF_2015": 2.186,
            "category": 0,
            "symbolSize": 31.7680541243,
            "field": "CN"
        },
        {
            "id": "JSAC",
            "name": "JSAC",
            "fullName": "IEEE Journal of Selected Areas in Communications",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jsac/",
            "CCF": "A",
            "CSA": 2,
            "IF_2015": 3.672,
            "category": 0,
            "symbolSize": 37.4604050147,
            "field": "CN"
        },
        {
            "id": "TMC",
            "name": "TMC",
            "fullName": "IEEE Transactions on Mobile Computing",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tmc/",
            "CCF": "A",
            "CSA": 2,
            "IF_2015": 2.456,
            "category": 0,
            "symbolSize": 32.9980495059,
            "field": "CN"
        },
        {
            "id": "TOIT",
            "name": "TOIT",
            "fullName": "ACM Transactions on Internet Technology",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/toit/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.705,
            "category": 0,
            "symbolSize": 21.334999424,
            "field": "CN"
        },
        {
            "id": "TOMCCAP",
            "name": "TOMCCAP",
            "fullName": "ACM Transactions on Multimedia Computing, Communications and Applications",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tomccap/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.982,
            "category": 0,
            "symbolSize": 24.1015774361,
            "field": "CN"
        },
        {
            "id": "TOSN",
            "name": "TOSN",
            "fullName": "ACM Transactions on Sensor Networks",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tosn/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.448,
            "category": 0,
            "symbolSize": 27.6489244436,
            "field": "CN"
        },
        {
            "id": "CN",
            "name": "CN",
            "fullName": "Computer Networks",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/cn/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.446,
            "category": 0,
            "symbolSize": 27.6357164621,
            "field": "CN"
        },
        {
            "id": "TOC1",
            "name": "TOC",
            "fullName": "IEEE Transactions on Communications",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tcom/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 2.298,
            "category": 0,
            "symbolSize": 32.2922872659,
            "field": "CN"
        },
        {
            "id": "TWC",
            "name": "TWC",
            "fullName": "IEEE Transactions on Wireless Communications",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/twc/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 2.925,
            "category": 0,
            "symbolSize": 34.8966005129,
            "field": "CN"
        },
        {
            "id": "AdHoc",
            "name": "AdHoc",
            "fullName": "Ad hoc Networks",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/adhoc/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.66,
            "category": 0,
            "symbolSize": 28.975001917,
            "field": "CN"
        },
        {
            "id": "CC",
            "name": "CC",
            "fullName": "Computer Communications",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/comcom/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 2.099,
            "category": 0,
            "symbolSize": 31.3458280472,
            "field": "CN"
        },
        {
            "id": "TNSM",
            "name": "TNSM",
            "fullName": "IEEE Transactions on Network and Service Management",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tnsm/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.296,
            "category": 0,
            "symbolSize": 26.6023526575,
            "field": "CN"
        },
        {
            "id": "IETCOM",
            "name": "IETCOM",
            "fullName": "IET Communications",
            "Press": "IET",
            "DBLP": "http://dblp.uni-trier.de/db/journals/iet-com/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.624,
            "category": 0,
            "symbolSize": 20.3763090871,
            "field": "CN"
        },
        {
            "id": "JNCA",
            "name": "JNCA",
            "fullName": "Journal of Network and Computer Applications",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jnca/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 2.331,
            "category": 0,
            "symbolSize": 32.4428424391,
            "field": "CN"
        },
        {
            "id": "MONET",
            "name": "MONET",
            "fullName": "Mobile Networks & Applications",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/monet/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.538,
            "category": 0,
            "symbolSize": 28.229175212,
            "field": "CN"
        },
        {
            "id": "Net",
            "name": "Net",
            "fullName": "Networks",
            "Press": "Wiley",
            "DBLP": "http://dblp.uni-trier.de/db/journals/networks/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.943,
            "category": 0,
            "symbolSize": 23.750389777,
            "field": "CN"
        },
        {
            "id": "PPNA",
            "name": "PPNA",
            "fullName": "Peer-to-Peer Networking and Applications",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ppna/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.0,
            "category": 0,
            "symbolSize": 24.2601513196,
            "field": "CN"
        },
        {
            "id": "WCMC",
            "name": "WCMC",
            "fullName": "Wireless Communications & Mobile Computing",
            "Press": "Wiley",
            "DBLP": "http://dblp.uni-trier.de/db/journals/wicomm/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.922,
            "category": 0,
            "symbolSize": 23.5567762003,
            "field": "CN"
        },
        {
            "id": "WN",
            "name": "WN",
            "fullName": "Wireless Networks",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/winet/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.006,
            "category": 0,
            "symbolSize": 24.3125335868,
            "field": "CN"
        }
    ],
    links: [
        {
            "source": "TON",
            "target": "CCFA"
        },
        {
            "source": "JSAC",
            "target": "CCFA"
        },
        {
            "source": "TMC",
            "target": "CCFA"
        },
        {
            "source": "TOIT",
            "target": "CCFB"
        },
        {
            "source": "TOMCCAP",
            "target": "CCFB"
        },
        {
            "source": "TOSN",
            "target": "CCFB"
        },
        {
            "source": "CN",
            "target": "CCFB"
        },
        {
            "source": "TOC1",
            "target": "CCFB"
        },
        {
            "source": "TWC",
            "target": "CCFB"
        },
        {
            "source": "AdHoc",
            "target": "CCFC"
        },
        {
            "source": "CC",
            "target": "CCFC"
        },
        {
            "source": "TNSM",
            "target": "CCFC"
        },
        {
            "source": "IETCOM",
            "target": "CCFC"
        },
        {
            "source": "JNCA",
            "target": "CCFC"
        },
        {
            "source": "MONET",
            "target": "CCFC"
        },
        {
            "source": "Net",
            "target": "CCFC"
        },
        {
            "source": "PPNA",
            "target": "CCFC"
        },
        {
            "source": "WCMC",
            "target": "CCFC"
        },
        {
            "source": "WN",
            "target": "CCFC"
        },
        {
            "source": "TON",
            "target": "CSA3"
        },
        {
            "source": "JSAC",
            "target": "CSA2"
        },
        {
            "source": "TMC",
            "target": "CSA2"
        },
        {
            "source": "TOIT",
            "target": "CSA4"
        },
        {
            "source": "TOMCCAP",
            "target": "CSA4"
        },
        {
            "source": "TOSN",
            "target": "CSA3"
        },
        {
            "source": "CN",
            "target": "CSA3"
        },
        {
            "source": "TOC1",
            "target": "CSA3"
        },
        {
            "source": "TWC",
            "target": "CSA2"
        },
        {
            "source": "AdHoc",
            "target": "CSA3"
        },
        {
            "source": "CC",
            "target": "CSA3"
        },
        {
            "source": "TNSM",
            "target": "CSA3"
        },
        {
            "source": "IETCOM",
            "target": "CSA4"
        },
        {
            "source": "JNCA",
            "target": "CSA3"
        },
        {
            "source": "MONET",
            "target": "CSA3"
        },
        {
            "source": "Net",
            "target": "CSA4"
        },
        {
            "source": "PPNA",
            "target": "CSA4"
        },
        {
            "source": "WCMC",
            "target": "CSA4"
        },
        {
            "source": "WN",
            "target": "CSA4"
        }
    ]
};

var graph_IS = {
    nodes: [
        {
            "id": "TDSC",
            "name": "TDSC",
            "fullName": "IEEE Transactions on Dependable and Secure Computing",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tdsc/",
            "CCF": "A",
            "CSA": 3,
            "IF_2015": 1.592,
            "category": 0,
            "symbolSize": 28.5647796445,
            "field": "IS"
        },
        {
            "id": "TIFS",
            "name": "TIFS",
            "fullName": "IEEE Transactions on Information Forensics and Security",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tifs/",
            "CCF": "A",
            "CSA": 2,
            "IF_2015": 2.441,
            "category": 0,
            "symbolSize": 32.9326413276,
            "field": "IS"
        },
        {
            "id": "JoC",
            "name": "JoC",
            "fullName": "Journal of Cryptology",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/joc/",
            "CCF": "A",
            "CSA": 4,
            "IF_2015": 1.617,
            "category": 0,
            "symbolSize": 28.7171576059,
            "field": "IS"
        },
        {
            "id": "TISSEC",
            "name": "TISSEC",
            "fullName": "ACM Transactions on Information and System Security",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tissec/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.759,
            "category": 0,
            "symbolSize": 21.9304111306,
            "field": "IS"
        },
        {
            "id": "C&S",
            "name": "C&S",
            "fullName": "Computers & Security",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/compsec/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.64,
            "category": 0,
            "symbolSize": 28.8557311467,
            "field": "IS"
        },
        {
            "id": "DCC",
            "name": "DCC",
            "fullName": "Designs, Codes and Cryptography",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/dcc/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.781,
            "category": 0,
            "symbolSize": 22.1641086576,
            "field": "IS"
        },
        {
            "id": "JCS",
            "name": "JCS",
            "fullName": "Journal of Computer Security",
            "Press": "IOS Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jcs/",
            "CCF": "B",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "IS"
        },
        {
            "id": "CLSR",
            "name": "CLSR",
            "fullName": "Computer Law and Security Reports",
            "Press": "Elsevier",
            "DBLP": "http://www.journals.elsevier.com/computer-law-and-security-review/",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "IS"
        },
        {
            "id": "EJIS",
            "name": "EJIS",
            "fullName": "EURASIP Journal on Information Security",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ejisec/",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "IS"
        },
        {
            "id": "IETIS",
            "name": "IETIS",
            "fullName": "IET Information Security",
            "Press": "IET",
            "DBLP": "http://dblp.uni-trier.de/db/journals/iet-ifs/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.013,
            "category": 0,
            "symbolSize": 24.3733507594,
            "field": "IS"
        },
        {
            "id": "IMCS",
            "name": "IMCS",
            "fullName": "Information Management & Computer Security",
            "Press": "Emerald",
            "DBLP": "http://dblp.uni-trier.de/db/journals/imcs/",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "IS"
        },
        {
            "id": "ISTR",
            "name": "ISTR",
            "fullName": "Information Security Technical Report",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/istr/",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "IS"
        },
        {
            "id": "IJISP",
            "name": "IJISP",
            "fullName": "International Journal of Information Security and Privacy",
            "Press": "Idea Group Inc",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijisp/",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "IS"
        },
        {
            "id": "IJICS",
            "name": "IJICS",
            "fullName": "International Journal of Information and Computer Security",
            "Press": "Inderscience",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijics/",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "IS"
        },
        {
            "id": "SCN",
            "name": "SCN",
            "fullName": "Security and Communication Networks",
            "Press": "Wiley",
            "DBLP": "http://dblp.uni-trier.de/db/journals/scn/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.806,
            "category": 0,
            "symbolSize": 22.4238756634,
            "field": "IS"
        },
        {
            "id": "IJIS2",
            "name": "IJIS",
            "fullName": "International Journal of Information Security",
            "Press": "Springer",
            "DBLP": "http://link.springer.com/journal/10207",
            "CCF": "D",
            "CSA": 4,
            "IF_2015": 1.279,
            "category": 0,
            "symbolSize": 26.4795282937,
            "field": "IS"
        }
    ],
    links: [
        {
            "source": "TDSC",
            "target": "CCFA"
        },
        {
            "source": "TIFS",
            "target": "CCFA"
        },
        {
            "source": "JoC",
            "target": "CCFA"
        },
        {
            "source": "TISSEC",
            "target": "CCFB"
        },
        {
            "source": "C&S",
            "target": "CCFB"
        },
        {
            "source": "DCC",
            "target": "CCFB"
        },
        {
            "source": "JCS",
            "target": "CCFB"
        },
        {
            "source": "CLSR",
            "target": "CCFC"
        },
        {
            "source": "EJIS",
            "target": "CCFC"
        },
        {
            "source": "IETIS",
            "target": "CCFC"
        },
        {
            "source": "IMCS",
            "target": "CCFC"
        },
        {
            "source": "ISTR",
            "target": "CCFC"
        },
        {
            "source": "IJISP",
            "target": "CCFC"
        },
        {
            "source": "IJICS",
            "target": "CCFC"
        },
        {
            "source": "SCN",
            "target": "CCFC"
        },
        {
            "source": "IJIS2",
            "target": "CCFD"
        },
        {
            "source": "TDSC",
            "target": "CSA3"
        },
        {
            "source": "TIFS",
            "target": "CSA2"
        },
        {
            "source": "JoC",
            "target": "CSA4"
        },
        {
            "source": "TISSEC",
            "target": "CSA4"
        },
        {
            "source": "C&S",
            "target": "CSA3"
        },
        {
            "source": "DCC",
            "target": "CSA4"
        },
        {
            "source": "JCS",
            "target": "CSA5"
        },
        {
            "source": "CLSR",
            "target": "CSA5"
        },
        {
            "source": "EJIS",
            "target": "CSA5"
        },
        {
            "source": "IETIS",
            "target": "CSA4"
        },
        {
            "source": "IMCS",
            "target": "CSA5"
        },
        {
            "source": "ISTR",
            "target": "CSA5"
        },
        {
            "source": "IJISP",
            "target": "CSA5"
        },
        {
            "source": "IJICS",
            "target": "CSA5"
        },
        {
            "source": "SCN",
            "target": "CSA4"
        },
        {
            "source": "IJIS2",
            "target": "CSA4"
        }
    ]
};

var graph_SE = {
    nodes: [
        {
            "id": "TOPLAS",
            "name": "TOPLAS",
            "fullName": "ACM Transactions on Programming Languages & Systems",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/toplas/",
            "CCF": "A",
            "CSA": 4,
            "IF_2015": 1.148,
            "category": 0,
            "symbolSize": 25.4886693477,
            "field": "SE"
        },
        {
            "id": "TOSEM",
            "name": "TOSEM",
            "fullName": "ACM Transactions on Software Engineering Methodology",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tosem/",
            "CCF": "A",
            "CSA": 3,
            "IF_2015": 1.513,
            "category": 0,
            "symbolSize": 28.070693486,
            "field": "SE"
        },
        {
            "id": "TSE",
            "name": "TSE",
            "fullName": "IEEE Transactions on Software Engineering",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tse/",
            "CCF": "A",
            "CSA": 3,
            "IF_2015": 1.516,
            "category": 0,
            "symbolSize": 28.0898181265,
            "field": "SE"
        },
        {
            "id": "ASE",
            "name": "ASE",
            "fullName": "Automated Software Engineering",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ase/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.312,
            "category": 0,
            "symbolSize": 26.7168295543,
            "field": "SE"
        },
        {
            "id": "ESE",
            "name": "ESE",
            "fullName": "Empirical Software Engineering",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ese/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.393,
            "category": 0,
            "symbolSize": 27.2804518018,
            "field": "SE"
        },
        {
            "id": "TSC",
            "name": "TSC",
            "fullName": "IEEE Transactions on Service Computing",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tsc/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 2.365,
            "category": 0,
            "symbolSize": 32.5961822253,
            "field": "SE"
        },
        {
            "id": "IETS",
            "name": "IETS",
            "fullName": "IET Software",
            "Press": "IET",
            "DBLP": "http://dblp.uni-trier.de/db/journals/iee/index.html",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.473,
            "category": 0,
            "symbolSize": 18.3188688906,
            "field": "SE"
        },
        {
            "id": "IST",
            "name": "IST",
            "fullName": "Information and Software Technology",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/infsof/index.html",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.569,
            "category": 0,
            "symbolSize": 28.4229367356,
            "field": "SE"
        },
        {
            "id": "JFP",
            "name": "JFP",
            "fullName": "Journal of Functional Programming",
            "Press": "Cambridge University Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jfp/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.357,
            "category": 0,
            "symbolSize": 27.0331514298,
            "field": "SE"
        },
        {
            "id": "JSEP",
            "name": "JSEP",
            "fullName": "Journal of Software: Evolution and Process",
            "Press": "Wiley",
            "DBLP": "http://dblp.uni-trier.de/db/journals/smr/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.729,
            "category": 0,
            "symbolSize": 21.6035981275,
            "field": "SE"
        },
        {
            "id": "JSS",
            "name": "JSS",
            "fullName": "Journal of Systems and Software",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jss/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.424,
            "category": 0,
            "symbolSize": 27.4894888207,
            "field": "SE"
        },
        {
            "id": "RE",
            "name": "RE",
            "fullName": "Requirements Engineering",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/re/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.105,
            "category": 0,
            "symbolSize": 25.1447005617,
            "field": "SE"
        },
        {
            "id": "SCP",
            "name": "SCP",
            "fullName": "Science of Computer Programming",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/scp/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.828,
            "category": 0,
            "symbolSize": 22.6476065806,
            "field": "SE"
        },
        {
            "id": "SoSyM",
            "name": "SoSyM",
            "fullName": "Software and System Modeling",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/sosym/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.99,
            "category": 0,
            "symbolSize": 24.1723213596,
            "field": "SE"
        },
        {
            "id": "SPE",
            "name": "SPE",
            "fullName": "Software: Practice and Experience",
            "Press": "Wiley",
            "DBLP": "http://dblp.uni-trier.de/db/journals/spe/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.652,
            "category": 0,
            "symbolSize": 20.7173891713,
            "field": "SE"
        },
        {
            "id": "STVR",
            "name": "STVR",
            "fullName": "Software Testing, Verification and Reliability",
            "Press": "Wiley",
            "DBLP": "http://dblp.uni-trier.de/db/journals/stvr/index.html",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.082,
            "category": 0,
            "symbolSize": 24.9565422112,
            "field": "SE"
        },
        {
            "id": "CL4",
            "name": "CL",
            "fullName": "Computer Languages, Systems and Structures",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/cl/index.html",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.556,
            "category": 0,
            "symbolSize": 19.4995259785,
            "field": "SE"
        },
        {
            "id": "IJSEKE",
            "name": "IJSEKE",
            "fullName": "International Journal on Software Engineering and Knowledge Engineering",
            "Press": "World Scientific",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijseke/index.html",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.24,
            "category": 0,
            "symbolSize": 13.9547669349,
            "field": "SE"
        },
        {
            "id": "STTT",
            "name": "STTT",
            "fullName": "International Journal on Software Tools for Technology Transfer",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/sttt/",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "SE"
        },
        {
            "id": "JLAP",
            "name": "JLAP",
            "fullName": "Journal of Logic and Algebraic Programming",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jlp/jlap.html",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "SE"
        },
        {
            "id": "JWE",
            "name": "JWE",
            "fullName": "Journal of Web Engineering",
            "Press": "Rinton Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jwe/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.622,
            "category": 0,
            "symbolSize": 20.3515268658,
            "field": "SE"
        },
        {
            "id": "SOCA",
            "name": "SOCA",
            "fullName": "Service Oriented Computing and Applications",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/soca/",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "SE"
        },
        {
            "id": "SQJ",
            "name": "SQJ",
            "fullName": "Software Quality Journal",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/sqj/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.787,
            "category": 0,
            "symbolSize": 22.2270042708,
            "field": "SE"
        },
        {
            "id": "TPLP",
            "name": "TPLP",
            "fullName": "Theory and Practice of Logic Programming",
            "Press": "Cambridge University Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tplp/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.952,
            "category": 0,
            "symbolSize": 23.8323831414,
            "field": "SE"
        }
    ],
    links: [
        {
            "source": "TOPLAS",
            "target": "CCFA"
        },
        {
            "source": "TOSEM",
            "target": "CCFA"
        },
        {
            "source": "TSE",
            "target": "CCFA"
        },
        {
            "source": "ASE",
            "target": "CCFB"
        },
        {
            "source": "ESE",
            "target": "CCFB"
        },
        {
            "source": "TSC",
            "target": "CCFB"
        },
        {
            "source": "IETS",
            "target": "CCFB"
        },
        {
            "source": "IST",
            "target": "CCFB"
        },
        {
            "source": "JFP",
            "target": "CCFB"
        },
        {
            "source": "JSEP",
            "target": "CCFB"
        },
        {
            "source": "JSS",
            "target": "CCFB"
        },
        {
            "source": "RE",
            "target": "CCFB"
        },
        {
            "source": "SCP",
            "target": "CCFB"
        },
        {
            "source": "SoSyM",
            "target": "CCFB"
        },
        {
            "source": "SPE",
            "target": "CCFB"
        },
        {
            "source": "STVR",
            "target": "CCFB"
        },
        {
            "source": "CL4",
            "target": "CCFC"
        },
        {
            "source": "IJSEKE",
            "target": "CCFC"
        },
        {
            "source": "STTT",
            "target": "CCFC"
        },
        {
            "source": "JLAP",
            "target": "CCFC"
        },
        {
            "source": "JWE",
            "target": "CCFC"
        },
        {
            "source": "SOCA",
            "target": "CCFC"
        },
        {
            "source": "SQJ",
            "target": "CCFC"
        },
        {
            "source": "TPLP",
            "target": "CCFC"
        },
        {
            "source": "TOPLAS",
            "target": "CSA4"
        },
        {
            "source": "TOSEM",
            "target": "CSA3"
        },
        {
            "source": "TSE",
            "target": "CSA3"
        },
        {
            "source": "ASE",
            "target": "CSA3"
        },
        {
            "source": "ESE",
            "target": "CSA3"
        },
        {
            "source": "TSC",
            "target": "CSA2"
        },
        {
            "source": "IETS",
            "target": "CSA4"
        },
        {
            "source": "IST",
            "target": "CSA3"
        },
        {
            "source": "JFP",
            "target": "CSA4"
        },
        {
            "source": "JSEP",
            "target": "CSA4"
        },
        {
            "source": "JSS",
            "target": "CSA3"
        },
        {
            "source": "RE",
            "target": "CSA4"
        },
        {
            "source": "SCP",
            "target": "CSA4"
        },
        {
            "source": "SoSyM",
            "target": "CSA4"
        },
        {
            "source": "SPE",
            "target": "CSA4"
        },
        {
            "source": "STVR",
            "target": "CSA4"
        },
        {
            "source": "CL4",
            "target": "CSA4"
        },
        {
            "source": "IJSEKE",
            "target": "CSA4"
        },
        {
            "source": "STTT",
            "target": "CSA5"
        },
        {
            "source": "JLAP",
            "target": "CSA5"
        },
        {
            "source": "JWE",
            "target": "CSA4"
        },
        {
            "source": "SOCA",
            "target": "CSA5"
        },
        {
            "source": "SQJ",
            "target": "CSA4"
        },
        {
            "source": "TPLP",
            "target": "CSA4"
        }
    ]
};

var graph_DB = {
    nodes: [
        {
            "id": "TODS",
            "name": "TODS",
            "fullName": "ACM Transactions on Database Systems",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tods/",
            "CCF": "A",
            "CSA": 4,
            "IF_2015": 0.633,
            "category": 0,
            "symbolSize": 20.487125813,
            "field": "DB"
        },
        {
            "id": "TOIS",
            "name": "TOIS",
            "fullName": "ACM Transactions on Information Systems",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tois/",
            "CCF": "A",
            "CSA": 4,
            "IF_2015": 0.977,
            "category": 0,
            "symbolSize": 24.0571430185,
            "field": "DB"
        },
        {
            "id": "TKDE",
            "name": "TKDE",
            "fullName": "IEEE Transactions on Knowledge and Data Engineering",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tkde/",
            "CCF": "A",
            "CSA": 3,
            "IF_2015": 2.476,
            "category": 0,
            "symbolSize": 33.084761836,
            "field": "DB"
        },
        {
            "id": "VLDBJ",
            "name": "VLDBJ",
            "fullName": "VLDB Journal",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/vldb/",
            "CCF": "A",
            "CSA": 3,
            "IF_2015": 1.744,
            "category": 0,
            "symbolSize": 29.4639913629,
            "field": "DB"
        },
        {
            "id": "TKDD",
            "name": "TKDD",
            "fullName": "ACM Transactions on KnowledgeDiscovery from Data",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tkdd/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.0,
            "category": 0,
            "symbolSize": 24.2601513196,
            "field": "DB"
        },
        {
            "id": "AEI",
            "name": "AEI",
            "fullName": "Advanced Engineering Informatics",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/aei/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 2.0,
            "category": 0,
            "symbolSize": 30.8480755457,
            "field": "DB"
        },
        {
            "id": "DKE2",
            "name": "DKE",
            "fullName": "Data and Knowledge Engineering",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/dke/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.5,
            "category": 0,
            "symbolSize": 27.9874785575,
            "field": "DB"
        },
        {
            "id": "DMKD",
            "name": "DMKD",
            "fullName": "Data Mining and KnowledgeDiscovery",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/datamine/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 2.714,
            "category": 0,
            "symbolSize": 34.0755247957,
            "field": "DB"
        },
        {
            "id": "EJIS1",
            "name": "EJIS",
            "fullName": "European Journal of Information Systems",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ejis/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 2.892,
            "category": 0,
            "symbolSize": 34.7714351787,
            "field": "DB"
        },
        {
            "id": "GeoInfo",
            "name": "GeoInfo",
            "fullName": "GeoInformatica",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/geoinformatica/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.061,
            "category": 0,
            "symbolSize": 24.7820896873,
            "field": "DB"
        },
        {
            "id": "IPM",
            "name": "IPM",
            "fullName": "Information Processing and Management",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ipm/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.397,
            "category": 0,
            "symbolSize": 27.3076246597,
            "field": "DB"
        },
        {
            "id": "InSci",
            "name": "InSci",
            "fullName": "Information Sciences",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/isci/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 3.364,
            "category": 0,
            "symbolSize": 36.4606147965,
            "field": "DB"
        },
        {
            "id": "InSys",
            "name": "InSys",
            "fullName": "Information Systems",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/is/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.832,
            "category": 0,
            "symbolSize": 29.9568327509,
            "field": "DB"
        },
        {
            "id": "JASIST",
            "name": "JASIST",
            "fullName": "Journal of the American Society for Information Science and Technology",
            "Press": "Wiley",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jasis/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 2.159,
            "category": 0,
            "symbolSize": 31.6384745507,
            "field": "DB"
        },
        {
            "id": "JWS",
            "name": "JWS",
            "fullName": "Journal of Web Semantics",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ws/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.277,
            "category": 0,
            "symbolSize": 26.4649963448,
            "field": "DB"
        },
        {
            "id": "KIS",
            "name": "KIS",
            "fullName": "Knowledge and Information Systems",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/kais/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.702,
            "category": 0,
            "symbolSize": 29.2218590549,
            "field": "DB"
        },
        {
            "id": "TWEB",
            "name": "TWEB",
            "fullName": "ACM Transactions on the Web",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tweb/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.061,
            "category": 0,
            "symbolSize": 24.7820896873,
            "field": "DB"
        },
        {
            "id": "SW",
            "name": "SW",
            "fullName": "Semantic Web",
            "Press": "IOS Press",
            "DBLP": "http://www.semantic-web-journal.net/",
            "CCF": "D",
            "CSA": 3,
            "IF_2015": 1.786,
            "category": 0,
            "symbolSize": 29.7015912995,
            "field": "DB"
        },
        {
            "id": "DPD",
            "name": "DPD",
            "fullName": "Distributed and Parallel Databases",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/dpd/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.8,
            "category": 0,
            "symbolSize": 22.3620781637,
            "field": "DB"
        },
        {
            "id": "I&M",
            "name": "I&M",
            "fullName": "Information and Management",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/iam/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 2.163,
            "category": 0,
            "symbolSize": 31.6577528095,
            "field": "DB"
        },
        {
            "id": "IPL3",
            "name": "IPL",
            "fullName": "Information Processing Letters",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ipl/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.605,
            "category": 0,
            "symbolSize": 20.138526293,
            "field": "DB"
        },
        {
            "id": "IR",
            "name": "IR",
            "fullName": "Information Retrieval",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ir/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.896,
            "category": 0,
            "symbolSize": 23.3124594501,
            "field": "DB"
        },
        {
            "id": "IJCIS",
            "name": "IJCIS",
            "fullName": "International Journal of Cooperative Information Systems",
            "Press": "World Scientific",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijcis/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.526,
            "category": 0,
            "symbolSize": 19.0881928145,
            "field": "DB"
        },
        {
            "id": "IJGIS",
            "name": "IJGIS",
            "fullName": "International Journal of Geographical Information Science",
            "Press": "Taylor & Francis",
            "DBLP": "http://dblp.uni-trier.de/db/journals/gis/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 2.065,
            "category": 0,
            "symbolSize": 31.1770270244,
            "field": "DB"
        },
        {
            "id": "IJIS4",
            "name": "IJIS",
            "fullName": "International Journal of Intelligent Systems",
            "Press": "Wiley",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijis/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 2.05,
            "category": 0,
            "symbolSize": 31.1018527978,
            "field": "DB"
        },
        {
            "id": "IJKM",
            "name": "IJKM",
            "fullName": "International Journal of Knowledge Management",
            "Press": "IGI-Global",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijkm/",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "DB"
        },
        {
            "id": "IJSWIS",
            "name": "IJSWIS",
            "fullName": "International Journal on Semantic Web and Information Systems",
            "Press": "IGI-Global",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijswis/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.621,
            "category": 0,
            "symbolSize": 20.3391142201,
            "field": "DB"
        },
        {
            "id": "JCIS",
            "name": "JCIS",
            "fullName": "Journal of Computer Information Systems",
            "Press": "IACIS",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jcis/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.764,
            "category": 0,
            "symbolSize": 21.9839562414,
            "field": "DB"
        },
        {
            "id": "JDM",
            "name": "JDM",
            "fullName": "Journal of Database Management",
            "Press": "IGI-Global",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jdm/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.12,
            "category": 0,
            "symbolSize": 10.4104668864,
            "field": "DB"
        },
        {
            "id": "JGITM",
            "name": "JGITM",
            "fullName": "Journal of Global Information Technology Management",
            "Press": "Ivy League Publishing",
            "DBLP": "http://www.tandfonline.com/loi/ugit20#.Vnv35pN97rI",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "DB"
        },
        {
            "id": "JIIS",
            "name": "JIIS",
            "fullName": "Journal of Intelligent Information Systems",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jiis/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.0,
            "category": 0,
            "symbolSize": 24.2601513196,
            "field": "DB"
        },
        {
            "id": "JSIS",
            "name": "JSIS",
            "fullName": "Journal of Strategic Information Systems",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jsis/",
            "CCF": "C",
            "CSA": 2,
            "IF_2015": 2.595,
            "category": 0,
            "symbolSize": 33.5893295832,
            "field": "DB"
        }
    ],
    links: [
        {
            "source": "TODS",
            "target": "CCFA"
        },
        {
            "source": "TOIS",
            "target": "CCFA"
        },
        {
            "source": "TKDE",
            "target": "CCFA"
        },
        {
            "source": "VLDBJ",
            "target": "CCFA"
        },
        {
            "source": "TKDD",
            "target": "CCFB"
        },
        {
            "source": "AEI",
            "target": "CCFB"
        },
        {
            "source": "DKE2",
            "target": "CCFB"
        },
        {
            "source": "DMKD",
            "target": "CCFB"
        },
        {
            "source": "EJIS1",
            "target": "CCFB"
        },
        {
            "source": "GeoInfo",
            "target": "CCFB"
        },
        {
            "source": "IPM",
            "target": "CCFB"
        },
        {
            "source": "InSci",
            "target": "CCFB"
        },
        {
            "source": "InSys",
            "target": "CCFB"
        },
        {
            "source": "JASIST",
            "target": "CCFB"
        },
        {
            "source": "JWS",
            "target": "CCFB"
        },
        {
            "source": "KIS",
            "target": "CCFB"
        },
        {
            "source": "TWEB",
            "target": "CCFB"
        },
        {
            "source": "SW",
            "target": "CCFD"
        },
        {
            "source": "DPD",
            "target": "CCFC"
        },
        {
            "source": "I&M",
            "target": "CCFC"
        },
        {
            "source": "IPL3",
            "target": "CCFC"
        },
        {
            "source": "IR",
            "target": "CCFC"
        },
        {
            "source": "IJCIS",
            "target": "CCFC"
        },
        {
            "source": "IJGIS",
            "target": "CCFC"
        },
        {
            "source": "IJIS4",
            "target": "CCFC"
        },
        {
            "source": "IJKM",
            "target": "CCFC"
        },
        {
            "source": "IJSWIS",
            "target": "CCFC"
        },
        {
            "source": "JCIS",
            "target": "CCFC"
        },
        {
            "source": "JDM",
            "target": "CCFC"
        },
        {
            "source": "JGITM",
            "target": "CCFC"
        },
        {
            "source": "JIIS",
            "target": "CCFC"
        },
        {
            "source": "JSIS",
            "target": "CCFC"
        },
        {
            "source": "TODS",
            "target": "CSA4"
        },
        {
            "source": "TOIS",
            "target": "CSA4"
        },
        {
            "source": "TKDE",
            "target": "CSA3"
        },
        {
            "source": "VLDBJ",
            "target": "CSA3"
        },
        {
            "source": "TKDD",
            "target": "CSA4"
        },
        {
            "source": "AEI",
            "target": "CSA3"
        },
        {
            "source": "DKE2",
            "target": "CSA3"
        },
        {
            "source": "DMKD",
            "target": "CSA2"
        },
        {
            "source": "EJIS1",
            "target": "CSA2"
        },
        {
            "source": "GeoInfo",
            "target": "CSA4"
        },
        {
            "source": "IPM",
            "target": "CSA4"
        },
        {
            "source": "InSci",
            "target": "CSA2"
        },
        {
            "source": "InSys",
            "target": "CSA3"
        },
        {
            "source": "JASIST",
            "target": "CSA3"
        },
        {
            "source": "JWS",
            "target": "CSA3"
        },
        {
            "source": "KIS",
            "target": "CSA3"
        },
        {
            "source": "TWEB",
            "target": "CSA3"
        },
        {
            "source": "SW",
            "target": "CSA3"
        },
        {
            "source": "DPD",
            "target": "CSA4"
        },
        {
            "source": "I&M",
            "target": "CSA3"
        },
        {
            "source": "IPL3",
            "target": "CSA4"
        },
        {
            "source": "IR",
            "target": "CSA4"
        },
        {
            "source": "IJCIS",
            "target": "CSA4"
        },
        {
            "source": "IJGIS",
            "target": "CSA3"
        },
        {
            "source": "IJIS4",
            "target": "CSA3"
        },
        {
            "source": "IJKM",
            "target": "CSA5"
        },
        {
            "source": "IJSWIS",
            "target": "CSA4"
        },
        {
            "source": "JCIS",
            "target": "CSA4"
        },
        {
            "source": "JDM",
            "target": "CSA4"
        },
        {
            "source": "JGITM",
            "target": "CSA5"
        },
        {
            "source": "JIIS",
            "target": "CSA4"
        },
        {
            "source": "JSIS",
            "target": "CSA2"
        }
    ]
};

var graph_CST = {
    nodes: [
        {
            "id": "IANDC",
            "name": "IANDC",
            "fullName": "Information and Computation",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/iandc/",
            "CCF": "A",
            "CSA": 4,
            "IF_2015": 0.873,
            "category": 0,
            "symbolSize": 23.0919012695,
            "field": "CST"
        },
        {
            "id": "SICOMP",
            "name": "SICOMP",
            "fullName": "SIAM Journal on Computing",
            "Press": "SIAM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/siamcomp/",
            "CCF": "A",
            "CSA": 4,
            "IF_2015": 0.841,
            "category": 0,
            "symbolSize": 22.7777562069,
            "field": "CST"
        },
        {
            "id": "TIT",
            "name": "TIT",
            "fullName": "IEEE Transactions on Information Theory",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tit/",
            "CCF": "A",
            "CSA": 2,
            "IF_2015": 1.737,
            "category": 0,
            "symbolSize": 29.4239557701,
            "field": "CST"
        },
        {
            "id": "TALG",
            "name": "TALG",
            "fullName": "ACM Transactions on Algorithms",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/talg/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.776,
            "category": 0,
            "symbolSize": 22.1114239348,
            "field": "CST"
        },
        {
            "id": "TOCL",
            "name": "TOCL",
            "fullName": "ACM Transactions on Computational Logic",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tocl/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.855,
            "category": 0,
            "symbolSize": 22.9162647034,
            "field": "CST"
        },
        {
            "id": "TOMS",
            "name": "TOMS",
            "fullName": "ACM Transactions on Mathematical Software",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/toms/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 1.879,
            "category": 0,
            "symbolSize": 30.2124619257,
            "field": "CST"
        },
        {
            "id": "Algorithmica",
            "name": "Algorithmica",
            "fullName": "Algorithmica",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/algorithmica/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.795,
            "category": 0,
            "symbolSize": 22.3103191006,
            "field": "CST"
        },
        {
            "id": "CC1",
            "name": "CC",
            "fullName": "Computational complexity",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/cc/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.342,
            "category": 0,
            "symbolSize": 16.1162067585,
            "field": "CST"
        },
        {
            "id": "FAC",
            "name": "FAC",
            "fullName": "Formal Aspects of Computing",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/fac/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.521,
            "category": 0,
            "symbolSize": 19.0180259596,
            "field": "CST"
        },
        {
            "id": "FMSD",
            "name": "FMSD",
            "fullName": "Formal Methods in System Design",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/fmsd/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.132,
            "category": 0,
            "symbolSize": 25.3618396482,
            "field": "CST"
        },
        {
            "id": "INFORMS",
            "name": "INFORMS",
            "fullName": "INFORMS Journal on Computing",
            "Press": "INFORMS",
            "DBLP": "http://dblp.uni-trier.de/db/journals/informs/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.246,
            "category": 0,
            "symbolSize": 26.2374937288,
            "field": "CST"
        },
        {
            "id": "JCSS",
            "name": "JCSS",
            "fullName": "Journal of Computer and System Sciences",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jcss/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.583,
            "category": 0,
            "symbolSize": 28.5094670987,
            "field": "CST"
        },
        {
            "id": "JGO",
            "name": "JGO",
            "fullName": "Journal of Global Optimization",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jgo/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 1.219,
            "category": 0,
            "symbolSize": 26.0357964893,
            "field": "CST"
        },
        {
            "id": "JSC",
            "name": "JSC",
            "fullName": "Journal of Symbolic Computation",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jsc/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.03,
            "category": 0,
            "symbolSize": 24.5197464648,
            "field": "CST"
        },
        {
            "id": "MSCS",
            "name": "MSCS",
            "fullName": "Mathematical Structures in Computer Science",
            "Press": "Cambridge University Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/mscs/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.758,
            "category": 0,
            "symbolSize": 21.9196711055,
            "field": "CST"
        },
        {
            "id": "TCS2",
            "name": "TCS",
            "fullName": "Theoretical Computer Science",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tcs/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.643,
            "category": 0,
            "symbolSize": 20.6089300489,
            "field": "CST"
        },
        {
            "id": "APAL",
            "name": "APAL",
            "fullName": "Annals of Pure and Applied Logic",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/apal/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.582,
            "category": 0,
            "symbolSize": 19.8433927824,
            "field": "CST"
        },
        {
            "id": "ACTA",
            "name": "ACTA",
            "fullName": "Acta Informatica",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/acta/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.722,
            "category": 0,
            "symbolSize": 21.5259315747,
            "field": "CST"
        },
        {
            "id": "DAM",
            "name": "DAM",
            "fullName": "Discrete Applied Mathematics",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/dam/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.722,
            "category": 0,
            "symbolSize": 21.5259315747,
            "field": "CST"
        },
        {
            "id": "FUIN",
            "name": "FUIN",
            "fullName": "Fundamenta Informaticae",
            "Press": "IOS Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/fuin/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.658,
            "category": 0,
            "symbolSize": 20.7890950722,
            "field": "CST"
        },
        {
            "id": "LISP",
            "name": "LISP",
            "fullName": "Higher-Order and Symbolic Computation",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/lisp/",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "CST"
        },
        {
            "id": "IPL",
            "name": "IPL",
            "fullName": "Information Processing Letters",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ipl/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.605,
            "category": 0,
            "symbolSize": 20.138526293,
            "field": "CST"
        },
        {
            "id": "JCOMPLEXITY",
            "name": "JCOMPLEXITY",
            "fullName": "Journal of Complexity",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jc/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.358,
            "category": 0,
            "symbolSize": 27.0400886673,
            "field": "CST"
        },
        {
            "id": "LOGCOM",
            "name": "LOGCOM",
            "fullName": "Journal of Logic and Computation",
            "Press": "Oxford University Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/logcom/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.585,
            "category": 0,
            "symbolSize": 19.882357581,
            "field": "CST"
        },
        {
            "id": "JSL",
            "name": "JSL",
            "fullName": "Journal of Symbolic Logic",
            "Press": "Association for Symbolic Logic",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jsyml/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.51,
            "category": 0,
            "symbolSize": 18.8619604457,
            "field": "CST"
        },
        {
            "id": "LMCS",
            "name": "LMCS",
            "fullName": "Logical Methods in Computer Science",
            "Press": "LMCS",
            "DBLP": "http://dblp.uni-trier.de/db/journals/lmcs/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.569,
            "category": 0,
            "symbolSize": 19.6728637995,
            "field": "CST"
        },
        {
            "id": "SIDMA",
            "name": "SIDMA",
            "fullName": "SIAM Journal on Discrete Mathematics",
            "Press": "SIAM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/siamdm/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.793,
            "category": 0,
            "symbolSize": 22.2895484037,
            "field": "CST"
        },
        {
            "id": "TCS",
            "name": "TCS",
            "fullName": "Theory of Computing Systems",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/mst/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.719,
            "category": 0,
            "symbolSize": 21.4924776235,
            "field": "CST"
        }
    ],
    links: [
        {
            "source": "IANDC",
            "target": "CCFA"
        },
        {
            "source": "SICOMP",
            "target": "CCFA"
        },
        {
            "source": "TIT",
            "target": "CCFA"
        },
        {
            "source": "TALG",
            "target": "CCFB"
        },
        {
            "source": "TOCL",
            "target": "CCFB"
        },
        {
            "source": "TOMS",
            "target": "CCFB"
        },
        {
            "source": "Algorithmica",
            "target": "CCFB"
        },
        {
            "source": "CC1",
            "target": "CCFB"
        },
        {
            "source": "FAC",
            "target": "CCFB"
        },
        {
            "source": "FMSD",
            "target": "CCFB"
        },
        {
            "source": "INFORMS",
            "target": "CCFB"
        },
        {
            "source": "JCSS",
            "target": "CCFB"
        },
        {
            "source": "JGO",
            "target": "CCFB"
        },
        {
            "source": "JSC",
            "target": "CCFB"
        },
        {
            "source": "MSCS",
            "target": "CCFB"
        },
        {
            "source": "TCS2",
            "target": "CCFB"
        },
        {
            "source": "APAL",
            "target": "CCFC"
        },
        {
            "source": "ACTA",
            "target": "CCFC"
        },
        {
            "source": "DAM",
            "target": "CCFC"
        },
        {
            "source": "FUIN",
            "target": "CCFC"
        },
        {
            "source": "LISP",
            "target": "CCFC"
        },
        {
            "source": "IPL",
            "target": "CCFC"
        },
        {
            "source": "JCOMPLEXITY",
            "target": "CCFC"
        },
        {
            "source": "LOGCOM",
            "target": "CCFC"
        },
        {
            "source": "JSL",
            "target": "CCFC"
        },
        {
            "source": "LMCS",
            "target": "CCFC"
        },
        {
            "source": "SIDMA",
            "target": "CCFC"
        },
        {
            "source": "TCS",
            "target": "CCFC"
        },
        {
            "source": "IANDC",
            "target": "CSA4"
        },
        {
            "source": "SICOMP",
            "target": "CSA4"
        },
        {
            "source": "TIT",
            "target": "CSA2"
        },
        {
            "source": "TALG",
            "target": "CSA4"
        },
        {
            "source": "TOCL",
            "target": "CSA4"
        },
        {
            "source": "TOMS",
            "target": "CSA2"
        },
        {
            "source": "Algorithmica",
            "target": "CSA4"
        },
        {
            "source": "CC1",
            "target": "CSA4"
        },
        {
            "source": "FAC",
            "target": "CSA4"
        },
        {
            "source": "FMSD",
            "target": "CSA4"
        },
        {
            "source": "INFORMS",
            "target": "CSA4"
        },
        {
            "source": "JCSS",
            "target": "CSA4"
        },
        {
            "source": "JGO",
            "target": "CSA2"
        },
        {
            "source": "JSC",
            "target": "CSA4"
        },
        {
            "source": "MSCS",
            "target": "CSA4"
        },
        {
            "source": "TCS2",
            "target": "CSA4"
        },
        {
            "source": "APAL",
            "target": "CSA4"
        },
        {
            "source": "ACTA",
            "target": "CSA4"
        },
        {
            "source": "DAM",
            "target": "CSA4"
        },
        {
            "source": "FUIN",
            "target": "CSA4"
        },
        {
            "source": "LISP",
            "target": "CSA5"
        },
        {
            "source": "IPL",
            "target": "CSA4"
        },
        {
            "source": "JCOMPLEXITY",
            "target": "CSA3"
        },
        {
            "source": "LOGCOM",
            "target": "CSA4"
        },
        {
            "source": "JSL",
            "target": "CSA4"
        },
        {
            "source": "LMCS",
            "target": "CSA4"
        },
        {
            "source": "SIDMA",
            "target": "CSA4"
        },
        {
            "source": "TCS",
            "target": "CSA4"
        }
    ]
};

var graph_CG = {
    nodes: [
        {
            "id": "TOG",
            "name": "TOG",
            "fullName": "ACM Transactions on Graphics",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tog/",
            "CCF": "A",
            "CSA": 1,
            "IF_2015": 4.218,
            "category": 0,
            "symbolSize": 39.0732715755,
            "field": "CG"
        },
        {
            "id": "TIP",
            "name": "TIP",
            "fullName": "IEEE Transactions on Image Processing",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tip/",
            "CCF": "A",
            "CSA": 2,
            "IF_2015": 3.735,
            "category": 0,
            "symbolSize": 37.6563057968,
            "field": "CG"
        },
        {
            "id": "TVCG",
            "name": "TVCG",
            "fullName": "IEEE Transactions on Visualization and Computer Graphics",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tvcg/",
            "CCF": "A",
            "CSA": 3,
            "IF_2015": 1.4,
            "category": 0,
            "symbolSize": 27.3279649723,
            "field": "CG"
        },
        {
            "id": "TOMCCAP1",
            "name": "TOMCCAP",
            "fullName": "ACM Transactions on Multimedia Computing,Communications and Application",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tomccap/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.982,
            "category": 0,
            "symbolSize": 24.1015774361,
            "field": "CG"
        },
        {
            "id": "CAD",
            "name": "CAD",
            "fullName": "Computer-Aided Design",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/cad/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 2.149,
            "category": 0,
            "symbolSize": 31.59015399,
            "field": "CG"
        },
        {
            "id": "CAGD",
            "name": "CAGD",
            "fullName": "Computer Aided Geometric Design",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/cagd/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.092,
            "category": 0,
            "symbolSize": 25.0387179067,
            "field": "CG"
        },
        {
            "id": "CGF",
            "name": "CGF",
            "fullName": "Computer Graphics Forum",
            "Press": "Wiley",
            "DBLP": "http://dblp.uni-trier.de/db/journals/cgf/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.542,
            "category": 0,
            "symbolSize": 28.2543463186,
            "field": "CG"
        },
        {
            "id": "GM",
            "name": "GM",
            "fullName": "Graphical Models",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/cvgip/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.821,
            "category": 0,
            "symbolSize": 22.5769000598,
            "field": "CG"
        },
        {
            "id": "TCSVT",
            "name": "TCSVT",
            "fullName": "IEEE Transactions on Circuits and Systems for Video Technology",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tcsv/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 2.254,
            "category": 0,
            "symbolSize": 32.0888290217,
            "field": "CG"
        },
        {
            "id": "TMM",
            "name": "TMM",
            "fullName": "IEEE Transactions on Multimedia",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tmm/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 2.536,
            "category": 0,
            "symbolSize": 33.3415547063,
            "field": "CG"
        },
        {
            "id": "JASA",
            "name": "JASA",
            "fullName": "Journal of The Acoustical Society of America",
            "Press": "AIP",
            "DBLP": "http://scitation.aip.org/content/asa/journal/jasa",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.572,
            "category": 0,
            "symbolSize": 28.4415293929,
            "field": "CG"
        },
        {
            "id": "SIIMS",
            "name": "SIIMS",
            "fullName": "SIAM Journal on Imaging Sciences",
            "Press": "SIAM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/siamis/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 2.687,
            "category": 0,
            "symbolSize": 33.9667489268,
            "field": "CG"
        },
        {
            "id": "Speech Com",
            "name": "Speech Com",
            "fullName": "Speech Communication",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/speech/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.038,
            "category": 0,
            "symbolSize": 24.5880107936,
            "field": "CG"
        },
        {
            "id": "CAVW",
            "name": "CAVW",
            "fullName": "Computer Animation and Virtual Worlds",
            "Press": "Wiley",
            "DBLP": "http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1546-427X",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.548,
            "category": 0,
            "symbolSize": 19.3914140194,
            "field": "CG"
        },
        {
            "id": "C&G",
            "name": "C&G",
            "fullName": "Computers & Graphics-UK",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/cg/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.12,
            "category": 0,
            "symbolSize": 25.2658228959,
            "field": "CG"
        },
        {
            "id": "CGTA",
            "name": "CGTA",
            "fullName": "Computational Geometry: Theory and Applications",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/comgeo/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.589,
            "category": 0,
            "symbolSize": 19.9340884902,
            "field": "CG"
        },
        {
            "id": "DCG",
            "name": "DCG",
            "fullName": "Discrete & Computational Geometry",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/dcg/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 0.816,
            "category": 0,
            "symbolSize": 22.5261226322,
            "field": "CG"
        },
        {
            "id": "IET-IPR",
            "name": "IET-IPR",
            "fullName": "IET Image Processing",
            "Press": "IET",
            "DBLP": "http://dblp.uni-trier.de/db/journals/iet-ipr/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.86,
            "category": 0,
            "symbolSize": 22.9653252675,
            "field": "CG"
        },
        {
            "id": "ISPL",
            "name": "ISPL",
            "fullName": "IEEE Signal Processing Letter",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/spl/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.661,
            "category": 0,
            "symbolSize": 28.980935923,
            "field": "CG"
        },
        {
            "id": "JVCIR",
            "name": "JVCIR",
            "fullName": "Journal of Visual Communication and Image Representation",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jvcir/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.53,
            "category": 0,
            "symbolSize": 28.1786800601,
            "field": "CG"
        },
        {
            "id": "MS",
            "name": "MS",
            "fullName": "Multimedia Systems",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/mms/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.41,
            "category": 0,
            "symbolSize": 27.3955241972,
            "field": "CG"
        },
        {
            "id": "MTA",
            "name": "MTA",
            "fullName": "Multimedia Tools and Applications",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/mta/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.331,
            "category": 0,
            "symbolSize": 26.8513884137,
            "field": "CG"
        },
        {
            "id": "SP",
            "name": "SP",
            "fullName": "Signal Processing",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/sigpro/",
            "CCF": "C",
            "CSA": 2,
            "IF_2015": 2.063,
            "category": 0,
            "symbolSize": 31.1670289173,
            "field": "CG"
        },
        {
            "id": "SPIC",
            "name": "SPIC",
            "fullName": "Signal processing : image communication",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/spic/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.602,
            "category": 0,
            "symbolSize": 28.6259530883,
            "field": "CG"
        },
        {
            "id": "TVC",
            "name": "TVC",
            "fullName": "The Visual Computer",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/vc/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.06,
            "category": 0,
            "symbolSize": 24.7737177062,
            "field": "CG"
        },
        {
            "id": "JoVis",
            "name": "JoVis",
            "fullName": "Journal of visualization",
            "Press": "Springer",
            "DBLP": "http://link.springer.com/journal/12650",
            "CCF": "D",
            "CSA": 4,
            "IF_2015": 0.72,
            "category": 0,
            "symbolSize": 21.5036402364,
            "field": "CG"
        },
        {
            "id": "InfoVis",
            "name": "InfoVis",
            "fullName": "Information Visualization",
            "Press": "SAGE",
            "DBLP": "https://us.sagepub.com/en-us/nam/journal/information-visualization#description",
            "CCF": "D",
            "CSA": 4,
            "IF_2015": 0.639,
            "category": 0,
            "symbolSize": 20.5603736309,
            "field": "CG"
        }
    ],
    links: [
        {
            "source": "TOG",
            "target": "CCFA"
        },
        {
            "source": "TIP",
            "target": "CCFA"
        },
        {
            "source": "TVCG",
            "target": "CCFA"
        },
        {
            "source": "TOMCCAP1",
            "target": "CCFB"
        },
        {
            "source": "CAD",
            "target": "CCFB"
        },
        {
            "source": "CAGD",
            "target": "CCFB"
        },
        {
            "source": "CGF",
            "target": "CCFB"
        },
        {
            "source": "GM",
            "target": "CCFB"
        },
        {
            "source": "TCSVT",
            "target": "CCFB"
        },
        {
            "source": "TMM",
            "target": "CCFB"
        },
        {
            "source": "JASA",
            "target": "CCFB"
        },
        {
            "source": "SIIMS",
            "target": "CCFB"
        },
        {
            "source": "Speech Com",
            "target": "CCFB"
        },
        {
            "source": "CAVW",
            "target": "CCFC"
        },
        {
            "source": "C&G",
            "target": "CCFC"
        },
        {
            "source": "CGTA",
            "target": "CCFC"
        },
        {
            "source": "DCG",
            "target": "CCFC"
        },
        {
            "source": "IET-IPR",
            "target": "CCFC"
        },
        {
            "source": "ISPL",
            "target": "CCFC"
        },
        {
            "source": "JVCIR",
            "target": "CCFC"
        },
        {
            "source": "MS",
            "target": "CCFC"
        },
        {
            "source": "MTA",
            "target": "CCFC"
        },
        {
            "source": "SP",
            "target": "CCFC"
        },
        {
            "source": "SPIC",
            "target": "CCFC"
        },
        {
            "source": "TVC",
            "target": "CCFC"
        },
        {
            "source": "JoVis",
            "target": "CCFD"
        },
        {
            "source": "InfoVis",
            "target": "CCFD"
        },
        {
            "source": "TOG",
            "target": "CSA1"
        },
        {
            "source": "TIP",
            "target": "CSA2"
        },
        {
            "source": "TVCG",
            "target": "CSA3"
        },
        {
            "source": "TOMCCAP1",
            "target": "CSA4"
        },
        {
            "source": "CAD",
            "target": "CSA3"
        },
        {
            "source": "CAGD",
            "target": "CSA4"
        },
        {
            "source": "CGF",
            "target": "CSA3"
        },
        {
            "source": "GM",
            "target": "CSA4"
        },
        {
            "source": "TCSVT",
            "target": "CSA2"
        },
        {
            "source": "TMM",
            "target": "CSA2"
        },
        {
            "source": "JASA",
            "target": "CSA3"
        },
        {
            "source": "SIIMS",
            "target": "CSA2"
        },
        {
            "source": "Speech Com",
            "target": "CSA3"
        },
        {
            "source": "CAVW",
            "target": "CSA4"
        },
        {
            "source": "C&G",
            "target": "CSA4"
        },
        {
            "source": "CGTA",
            "target": "CSA4"
        },
        {
            "source": "DCG",
            "target": "CSA3"
        },
        {
            "source": "IET-IPR",
            "target": "CSA4"
        },
        {
            "source": "ISPL",
            "target": "CSA3"
        },
        {
            "source": "JVCIR",
            "target": "CSA3"
        },
        {
            "source": "MS",
            "target": "CSA4"
        },
        {
            "source": "MTA",
            "target": "CSA4"
        },
        {
            "source": "SP",
            "target": "CSA2"
        },
        {
            "source": "SPIC",
            "target": "CSA3"
        },
        {
            "source": "TVC",
            "target": "CSA4"
        },
        {
            "source": "JoVis",
            "target": "CSA4"
        },
        {
            "source": "InfoVis",
            "target": "CSA4"
        }
    ]
};

var graph_AI = {
    nodes: [
        {
            "id": "AI2",
            "name": "AI",
            "fullName": "Artificial Intelligence",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ai/",
            "CCF": "A",
            "CSA": 2,
            "IF_2015": 3.333,
            "category": 0,
            "symbolSize": 36.3558519796,
            "field": "AI"
        },
        {
            "id": "TPAMI",
            "name": "TPAMI",
            "fullName": "IEEE Trans on Pattern Analysis and Machine Intelligence",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/pami/",
            "CCF": "A",
            "CSA": 1,
            "IF_2015": 6.077,
            "category": 0,
            "symbolSize": 43.4965299428,
            "field": "AI"
        },
        {
            "id": "IJCV",
            "name": "IJCV",
            "fullName": "International Journal of Computer Vision",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijcv/",
            "CCF": "A",
            "CSA": 2,
            "IF_2015": 4.27,
            "category": 0,
            "symbolSize": 39.217623482,
            "field": "AI"
        },
        {
            "id": "JMLR",
            "name": "JMLR",
            "fullName": "Journal of Machine Learning Research",
            "Press": "MIT Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jmlr/",
            "CCF": "A",
            "CSA": 2,
            "IF_2015": 2.45,
            "category": 0,
            "symbolSize": 32.9719249314,
            "field": "AI"
        },
        {
            "id": "TAP",
            "name": "TAP",
            "fullName": "ACM Transactions on Applied Perception",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tap/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.561,
            "category": 0,
            "symbolSize": 19.5665335025,
            "field": "AI"
        },
        {
            "id": "TSLP",
            "name": "TSLP",
            "fullName": "ACM Transactions on Speech and Language Processing",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tslp/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 1.584,
            "category": 0,
            "symbolSize": 28.5156250117,
            "field": "AI"
        },
        {
            "id": "CL",
            "name": "CL",
            "fullName": "Computational Linguistics",
            "Press": "MIT Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/coling/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 2.017,
            "category": 0,
            "symbolSize": 30.9349190685,
            "field": "AI"
        },
        {
            "id": "CVIU",
            "name": "CVIU",
            "fullName": "Computer Vision and Image Understanding",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/cviu/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 2.134,
            "category": 0,
            "symbolSize": 31.5173359588,
            "field": "AI"
        },
        {
            "id": "DKE",
            "name": "DKE",
            "fullName": "Data and Knowledge Engineering",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/dke/index.html",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.5,
            "category": 0,
            "symbolSize": 27.9874785575,
            "field": "AI"
        },
        {
            "id": "EC",
            "name": "EC",
            "fullName": "Evolutionary Computation",
            "Press": "MIT Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ec/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 3.6,
            "category": 0,
            "symbolSize": 37.2330788948,
            "field": "AI"
        },
        {
            "id": "TAC",
            "name": "TAC",
            "fullName": "IEEE Transactions on Affective Computing",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/taffco/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 1.873,
            "category": 0,
            "symbolSize": 30.1801111284,
            "field": "AI"
        },
        {
            "id": "TASLP",
            "name": "TASLP",
            "fullName": "IEEE Transactions on Audio, Speech, and Language Processing",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/taslp/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 1.584,
            "category": 0,
            "symbolSize": 28.5156250117,
            "field": "AI"
        },
        {
            "id": "TOC2",
            "name": "TOC",
            "fullName": "IEEE Transactions on Cybernetics",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tcyb/",
            "CCF": "B",
            "CSA": 1,
            "IF_2015": 4.943,
            "category": 0,
            "symbolSize": 40.9640452059,
            "field": "AI"
        },
        {
            "id": "TEC",
            "name": "TEC",
            "fullName": "IEEE Transactions on Evolutionary Computation",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tec/",
            "CCF": "B",
            "CSA": 1,
            "IF_2015": 5.908,
            "category": 0,
            "symbolSize": 43.1461164586,
            "field": "AI"
        },
        {
            "id": "TFS",
            "name": "TFS",
            "fullName": "IEEE Transactions on Fuzzy Systems",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tfs/",
            "CCF": "B",
            "CSA": 1,
            "IF_2015": 6.701,
            "category": 0,
            "symbolSize": 44.7219580516,
            "field": "AI"
        },
        {
            "id": "TNNLS",
            "name": "TNNLS",
            "fullName": "IEEE Transactions on Neural Networks and learning systems",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tnn/",
            "CCF": "B",
            "CSA": 1,
            "IF_2015": 4.854,
            "category": 0,
            "symbolSize": 40.7450370845,
            "field": "AI"
        },
        {
            "id": "IJAR",
            "name": "IJAR",
            "fullName": "International Journal of Approximate Reasoning",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijar/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 2.696,
            "category": 0,
            "symbolSize": 34.003105627,
            "field": "AI"
        },
        {
            "id": "JAIR",
            "name": "JAIR",
            "fullName": "Journal of AI Research",
            "Press": "AAAI",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jair/index.html",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.659,
            "category": 0,
            "symbolSize": 28.9690651166,
            "field": "AI"
        },
        {
            "id": "JAR",
            "name": "JAR",
            "fullName": "Journal of Automated Reasoning",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jar/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 2.113,
            "category": 0,
            "symbolSize": 31.4147024927,
            "field": "AI"
        },
        {
            "id": "JSLHR",
            "name": "JSLHR",
            "fullName": "Journal of Speech, Language, and Hearing Research",
            "Press": "American Speech-Language Hearing Association",
            "DBLP": "http://jslhr.pubs.asha.org/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.526,
            "category": 0,
            "symbolSize": 28.1533555622,
            "field": "AI"
        },
        {
            "id": "ML",
            "name": "ML",
            "fullName": "Machine Learning",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ml/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.719,
            "category": 0,
            "symbolSize": 29.3204230273,
            "field": "AI"
        },
        {
            "id": "NC2",
            "name": "NC",
            "fullName": "Neural Computation",
            "Press": "MIT Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/neco/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.626,
            "category": 0,
            "symbolSize": 28.771564074,
            "field": "AI"
        },
        {
            "id": "NN",
            "name": "NN",
            "fullName": "Neural Networks",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/nn/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 3.216,
            "category": 0,
            "symbolSize": 35.9530916387,
            "field": "AI"
        },
        {
            "id": "PR",
            "name": "PR",
            "fullName": "Pattern Recognition",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/conf/par/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 3.399,
            "category": 0,
            "symbolSize": 36.5779440529,
            "field": "AI"
        },
        {
            "id": "AAMAS",
            "name": "AAMAS",
            "fullName": "Autonomous Agents and Multi-Agent Systems",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/aamas/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.417,
            "category": 0,
            "symbolSize": 27.4425960658,
            "field": "AI"
        },
        {
            "id": "TALIP",
            "name": "TALIP",
            "fullName": "ACM Transactions on Asian Language Information Processing",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/talip/",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "AI"
        },
        {
            "id": "AI",
            "name": "AI",
            "fullName": "Applied Intelligence",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/apin/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.215,
            "category": 0,
            "symbolSize": 26.0056263629,
            "field": "AI"
        },
        {
            "id": "AIM",
            "name": "AIM",
            "fullName": "Artificial Intelligence in Medicine",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/artmed/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 2.142,
            "category": 0,
            "symbolSize": 31.556222825,
            "field": "AI"
        },
        {
            "id": "AL",
            "name": "AL",
            "fullName": "Artificial Life",
            "Press": "MIT Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/alife/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.042,
            "category": 0,
            "symbolSize": 24.6219946374,
            "field": "AI"
        },
        {
            "id": "CI",
            "name": "CI",
            "fullName": "Computational Intelligence",
            "Press": "Wiley",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ci/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.722,
            "category": 0,
            "symbolSize": 21.5259315747,
            "field": "AI"
        },
        {
            "id": "CSL",
            "name": "CSL",
            "fullName": "Computer Speech and Language",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/csl/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.324,
            "category": 0,
            "symbolSize": 26.8019866418,
            "field": "AI"
        },
        {
            "id": "CS",
            "name": "CS",
            "fullName": "Connection Science",
            "Press": "Taylor & Francis",
            "DBLP": "http://dblp.uni-trier.de/db/journals/connection/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.125,
            "category": 0,
            "symbolSize": 25.305924112,
            "field": "AI"
        },
        {
            "id": "DSS",
            "name": "DSS",
            "fullName": "Decision Support Systems",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/dss/",
            "CCF": "C",
            "CSA": 2,
            "IF_2015": 2.604,
            "category": 0,
            "symbolSize": 33.6267245786,
            "field": "AI"
        },
        {
            "id": "EAAI",
            "name": "EAAI",
            "fullName": "Engineering Applications of Artificial Intelligence",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/eaai/",
            "CCF": "C",
            "CSA": 2,
            "IF_2015": 2.368,
            "category": 0,
            "symbolSize": 32.6096270684,
            "field": "AI"
        },
        {
            "id": "ES",
            "name": "ES",
            "fullName": "Expert Systems",
            "Press": "Blackwell",
            "DBLP": "http://dblp.uni-trier.de/db/journals/es/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.947,
            "category": 0,
            "symbolSize": 23.7869030833,
            "field": "AI"
        },
        {
            "id": "ESWA",
            "name": "ESWA",
            "fullName": "Expert Systems with Applications",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/eswa/",
            "CCF": "C",
            "CSA": 2,
            "IF_2015": 2.981,
            "category": 0,
            "symbolSize": 35.1063908795,
            "field": "AI"
        },
        {
            "id": "FSS",
            "name": "FSS",
            "fullName": "Fuzzy Sets and Systems",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/fss/",
            "CCF": "C",
            "CSA": 2,
            "IF_2015": 2.098,
            "category": 0,
            "symbolSize": 31.3408944673,
            "field": "AI"
        },
        {
            "id": "T-CIAIG",
            "name": "T-CIAIG",
            "fullName": "IEEE Transactions on Computational Intelligence and AI in Games",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tciaig/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.0,
            "category": 0,
            "symbolSize": 24.2601513196,
            "field": "AI"
        },
        {
            "id": "IET-CVI",
            "name": "IET-CVI",
            "fullName": "IET Computer Vision",
            "Press": "IET",
            "DBLP": "http://digital-library.theiet.org/content/journals/iet-cvi",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.573,
            "category": 0,
            "symbolSize": 19.7256285894,
            "field": "AI"
        },
        {
            "id": "IETSP",
            "name": "IETSP",
            "fullName": "IET Signal Processing",
            "Press": "IET",
            "DBLP": "http://digital-library.theiet.org/content/journals/iet-spr",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.873,
            "category": 0,
            "symbolSize": 23.0919012695,
            "field": "AI"
        },
        {
            "id": "IVC",
            "name": "IVC",
            "fullName": "Image and Vision Computing",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ivc/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.766,
            "category": 0,
            "symbolSize": 29.5890020329,
            "field": "AI"
        },
        {
            "id": "IDA",
            "name": "IDA",
            "fullName": "Intelligent Data Analysis",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ida/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.631,
            "category": 0,
            "symbolSize": 20.462598551,
            "field": "AI"
        },
        {
            "id": "IJCIA",
            "name": "IJCIA",
            "fullName": "International Journal of Computational Intelligence and Applications",
            "Press": "World Scientific",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijcia/",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "AI"
        },
        {
            "id": "IJDAR",
            "name": "IJDAR",
            "fullName": "International Journal on Document Analysis and Recognition",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijdar/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.885,
            "category": 0,
            "symbolSize": 23.2075061281,
            "field": "AI"
        },
        {
            "id": "IJIS",
            "name": "IJIS",
            "fullName": "International Journal of Intelligent Systems",
            "Press": "Wiley",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijis/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 2.05,
            "category": 0,
            "symbolSize": 31.1018527978,
            "field": "AI"
        },
        {
            "id": "IJNS",
            "name": "IJNS",
            "fullName": "International Journal of Neural Systems",
            "Press": "World Scientific",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijns/",
            "CCF": "C",
            "CSA": 1,
            "IF_2015": 6.085,
            "category": 0,
            "symbolSize": 43.5129100216,
            "field": "AI"
        },
        {
            "id": "IJPRAI",
            "name": "IJPRAI",
            "fullName": "International Journal of Pattern Recognition and Artificial Intelligence",
            "Press": "World Scientific",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijprai/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.915,
            "category": 0,
            "symbolSize": 23.4915082547,
            "field": "AI"
        },
        {
            "id": "IJUFKBS",
            "name": "IJUFKBS",
            "fullName": "International Journal of Uncertainty, Fuzziness and KBS",
            "Press": "World Scientific",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijcia/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.0,
            "category": 0,
            "symbolSize": 24.2601513196,
            "field": "AI"
        },
        {
            "id": "JETAI",
            "name": "JETAI",
            "fullName": "Journal of Experimental and Theoretical Artificial Intelligence",
            "Press": "Taylor & Francis",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jetai/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.703,
            "category": 0,
            "symbolSize": 29.2276782306,
            "field": "AI"
        },
        {
            "id": "KBS",
            "name": "KBS",
            "fullName": "Knowledge-Based Systems",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/kbs/",
            "CCF": "C",
            "CSA": 2,
            "IF_2015": 3.325,
            "category": 0,
            "symbolSize": 36.328686255,
            "field": "AI"
        },
        {
            "id": "MT",
            "name": "MT",
            "fullName": "Machine Translation",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/mt/",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "AI"
        },
        {
            "id": "MVS",
            "name": "MVS",
            "fullName": "Machine Vision and Applications",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/mva/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.272,
            "category": 0,
            "symbolSize": 26.4285901265,
            "field": "AI"
        },
        {
            "id": "NC",
            "name": "NC",
            "fullName": "Natural Computing",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/nc/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.31,
            "category": 0,
            "symbolSize": 26.7025786748,
            "field": "AI"
        },
        {
            "id": "NLE",
            "name": "NLE",
            "fullName": "Natural Language Engineering",
            "Press": "Cambridge University Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/nle/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.886,
            "category": 0,
            "symbolSize": 23.217087242,
            "field": "AI"
        },
        {
            "id": "NCA",
            "name": "NCA",
            "fullName": "Neural Computing & Applications",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/nca/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.492,
            "category": 0,
            "symbolSize": 27.9359910566,
            "field": "AI"
        },
        {
            "id": "NPL",
            "name": "NPL",
            "fullName": "Neural Processing Letters",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/npl/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.747,
            "category": 0,
            "symbolSize": 29.4811108916,
            "field": "AI"
        },
        {
            "id": "NeuroCom",
            "name": "NeuroCom",
            "fullName": "Neurocomputing",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijon/",
            "CCF": "C",
            "CSA": 2,
            "IF_2015": 2.392,
            "category": 0,
            "symbolSize": 32.7166961305,
            "field": "AI"
        },
        {
            "id": "PAA",
            "name": "PAA",
            "fullName": "Pattern Analysis and Applications",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/paa/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.104,
            "category": 0,
            "symbolSize": 25.1365816144,
            "field": "AI"
        },
        {
            "id": "PRL",
            "name": "PRL",
            "fullName": "Pattern Recognition Letters",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/prl/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.586,
            "category": 0,
            "symbolSize": 28.5279317624,
            "field": "AI"
        },
        {
            "id": "SoftCom",
            "name": "SoftCom",
            "fullName": "Soft Computing",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/soco/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.63,
            "category": 0,
            "symbolSize": 28.7956693377,
            "field": "AI"
        },
        {
            "id": "WIAS",
            "name": "WIAS",
            "fullName": "Web Intelligence and Agent Systems",
            "Press": "IOS Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/wias/",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "AI"
        }
    ],
    links: [
        {
            "source": "AI2",
            "target": "CCFA"
        },
        {
            "source": "TPAMI",
            "target": "CCFA"
        },
        {
            "source": "IJCV",
            "target": "CCFA"
        },
        {
            "source": "JMLR",
            "target": "CCFA"
        },
        {
            "source": "TAP",
            "target": "CCFB"
        },
        {
            "source": "TSLP",
            "target": "CCFB"
        },
        {
            "source": "CL",
            "target": "CCFB"
        },
        {
            "source": "CVIU",
            "target": "CCFB"
        },
        {
            "source": "DKE",
            "target": "CCFB"
        },
        {
            "source": "EC",
            "target": "CCFB"
        },
        {
            "source": "TAC",
            "target": "CCFB"
        },
        {
            "source": "TASLP",
            "target": "CCFB"
        },
        {
            "source": "TOC2",
            "target": "CCFB"
        },
        {
            "source": "TEC",
            "target": "CCFB"
        },
        {
            "source": "TFS",
            "target": "CCFB"
        },
        {
            "source": "TNNLS",
            "target": "CCFB"
        },
        {
            "source": "IJAR",
            "target": "CCFB"
        },
        {
            "source": "JAIR",
            "target": "CCFB"
        },
        {
            "source": "JAR",
            "target": "CCFB"
        },
        {
            "source": "JSLHR",
            "target": "CCFB"
        },
        {
            "source": "ML",
            "target": "CCFB"
        },
        {
            "source": "NC2",
            "target": "CCFB"
        },
        {
            "source": "NN",
            "target": "CCFB"
        },
        {
            "source": "PR",
            "target": "CCFB"
        },
        {
            "source": "AAMAS",
            "target": "CCFB"
        },
        {
            "source": "TALIP",
            "target": "CCFC"
        },
        {
            "source": "AI",
            "target": "CCFC"
        },
        {
            "source": "AIM",
            "target": "CCFC"
        },
        {
            "source": "AL",
            "target": "CCFC"
        },
        {
            "source": "CI",
            "target": "CCFC"
        },
        {
            "source": "CSL",
            "target": "CCFC"
        },
        {
            "source": "CS",
            "target": "CCFC"
        },
        {
            "source": "DSS",
            "target": "CCFC"
        },
        {
            "source": "EAAI",
            "target": "CCFC"
        },
        {
            "source": "ES",
            "target": "CCFC"
        },
        {
            "source": "ESWA",
            "target": "CCFC"
        },
        {
            "source": "FSS",
            "target": "CCFC"
        },
        {
            "source": "T-CIAIG",
            "target": "CCFC"
        },
        {
            "source": "IET-CVI",
            "target": "CCFC"
        },
        {
            "source": "IETSP",
            "target": "CCFC"
        },
        {
            "source": "IVC",
            "target": "CCFC"
        },
        {
            "source": "IDA",
            "target": "CCFC"
        },
        {
            "source": "IJCIA",
            "target": "CCFC"
        },
        {
            "source": "IJDAR",
            "target": "CCFC"
        },
        {
            "source": "IJIS",
            "target": "CCFC"
        },
        {
            "source": "IJNS",
            "target": "CCFC"
        },
        {
            "source": "IJPRAI",
            "target": "CCFC"
        },
        {
            "source": "IJUFKBS",
            "target": "CCFC"
        },
        {
            "source": "JETAI",
            "target": "CCFC"
        },
        {
            "source": "KBS",
            "target": "CCFC"
        },
        {
            "source": "MT",
            "target": "CCFC"
        },
        {
            "source": "MVS",
            "target": "CCFC"
        },
        {
            "source": "NC",
            "target": "CCFC"
        },
        {
            "source": "NLE",
            "target": "CCFC"
        },
        {
            "source": "NCA",
            "target": "CCFC"
        },
        {
            "source": "NPL",
            "target": "CCFC"
        },
        {
            "source": "NeuroCom",
            "target": "CCFC"
        },
        {
            "source": "PAA",
            "target": "CCFC"
        },
        {
            "source": "PRL",
            "target": "CCFC"
        },
        {
            "source": "SoftCom",
            "target": "CCFC"
        },
        {
            "source": "WIAS",
            "target": "CCFC"
        },
        {
            "source": "AI2",
            "target": "CSA2"
        },
        {
            "source": "TPAMI",
            "target": "CSA1"
        },
        {
            "source": "IJCV",
            "target": "CSA2"
        },
        {
            "source": "JMLR",
            "target": "CSA2"
        },
        {
            "source": "TAP",
            "target": "CSA4"
        },
        {
            "source": "TSLP",
            "target": "CSA2"
        },
        {
            "source": "CL",
            "target": "CSA3"
        },
        {
            "source": "CVIU",
            "target": "CSA3"
        },
        {
            "source": "DKE",
            "target": "CSA3"
        },
        {
            "source": "EC",
            "target": "CSA2"
        },
        {
            "source": "TAC",
            "target": "CSA2"
        },
        {
            "source": "TASLP",
            "target": "CSA2"
        },
        {
            "source": "TOC2",
            "target": "CSA1"
        },
        {
            "source": "TEC",
            "target": "CSA1"
        },
        {
            "source": "TFS",
            "target": "CSA1"
        },
        {
            "source": "TNNLS",
            "target": "CSA1"
        },
        {
            "source": "IJAR",
            "target": "CSA2"
        },
        {
            "source": "JAIR",
            "target": "CSA4"
        },
        {
            "source": "JAR",
            "target": "CSA4"
        },
        {
            "source": "JSLHR",
            "target": "CSA4"
        },
        {
            "source": "ML",
            "target": "CSA3"
        },
        {
            "source": "NC2",
            "target": "CSA3"
        },
        {
            "source": "NN",
            "target": "CSA2"
        },
        {
            "source": "PR",
            "target": "CSA2"
        },
        {
            "source": "AAMAS",
            "target": "CSA4"
        },
        {
            "source": "TALIP",
            "target": "CSA5"
        },
        {
            "source": "AI",
            "target": "CSA4"
        },
        {
            "source": "AIM",
            "target": "CSA3"
        },
        {
            "source": "AL",
            "target": "CSA3"
        },
        {
            "source": "CI",
            "target": "CSA4"
        },
        {
            "source": "CSL",
            "target": "CSA3"
        },
        {
            "source": "CS",
            "target": "CSA4"
        },
        {
            "source": "DSS",
            "target": "CSA2"
        },
        {
            "source": "EAAI",
            "target": "CSA2"
        },
        {
            "source": "ES",
            "target": "CSA4"
        },
        {
            "source": "ESWA",
            "target": "CSA2"
        },
        {
            "source": "FSS",
            "target": "CSA2"
        },
        {
            "source": "T-CIAIG",
            "target": "CSA4"
        },
        {
            "source": "IET-CVI",
            "target": "CSA4"
        },
        {
            "source": "IETSP",
            "target": "CSA4"
        },
        {
            "source": "IVC",
            "target": "CSA3"
        },
        {
            "source": "IDA",
            "target": "CSA4"
        },
        {
            "source": "IJCIA",
            "target": "CSA5"
        },
        {
            "source": "IJDAR",
            "target": "CSA4"
        },
        {
            "source": "IJIS",
            "target": "CSA3"
        },
        {
            "source": "IJNS",
            "target": "CSA1"
        },
        {
            "source": "IJPRAI",
            "target": "CSA4"
        },
        {
            "source": "IJUFKBS",
            "target": "CSA4"
        },
        {
            "source": "JETAI",
            "target": "CSA4"
        },
        {
            "source": "KBS",
            "target": "CSA2"
        },
        {
            "source": "MT",
            "target": "CSA5"
        },
        {
            "source": "MVS",
            "target": "CSA3"
        },
        {
            "source": "NC",
            "target": "CSA4"
        },
        {
            "source": "NLE",
            "target": "CSA4"
        },
        {
            "source": "NCA",
            "target": "CSA3"
        },
        {
            "source": "NPL",
            "target": "CSA3"
        },
        {
            "source": "NeuroCom",
            "target": "CSA2"
        },
        {
            "source": "PAA",
            "target": "CSA4"
        },
        {
            "source": "PRL",
            "target": "CSA3"
        },
        {
            "source": "SoftCom",
            "target": "CSA3"
        },
        {
            "source": "WIAS",
            "target": "CSA5"
        }
    ]
};

var graph_HCI = {
    nodes: [
        {
            "id": "TOCHI",
            "name": "TOCHI",
            "fullName": "ACM Transactions on Computer-Human Interaction",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tochi/",
            "CCF": "A",
            "CSA": 4,
            "IF_2015": 1.293,
            "category": 0,
            "symbolSize": 26.5807677963,
            "field": "HCI"
        },
        {
            "id": "IJHCS",
            "name": "IJHCS",
            "fullName": "International Journal of Human Computer Studies",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijmms/",
            "CCF": "A",
            "CSA": 3,
            "IF_2015": 1.476,
            "category": 0,
            "symbolSize": 27.8323709477,
            "field": "HCI"
        },
        {
            "id": "CSCW",
            "name": "CSCW",
            "fullName": "Computer Supported Cooperative Work",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/cscw/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.784,
            "category": 0,
            "symbolSize": 29.6903770842,
            "field": "HCI"
        },
        {
            "id": "HCI",
            "name": "HCI",
            "fullName": "Human Computer Interaction",
            "Press": "Taylor & Francis",
            "DBLP": "http://dblp.uni-trier.de/db/journals/hhci/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 3.7,
            "category": 0,
            "symbolSize": 37.5478132959,
            "field": "HCI"
        },
        {
            "id": "IWC",
            "name": "IWC",
            "fullName": "Interacting with Computers",
            "Press": "Oxford University Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/iwc/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.889,
            "category": 0,
            "symbolSize": 23.2457824917,
            "field": "HCI"
        },
        {
            "id": "UMUAI",
            "name": "UMUAI",
            "fullName": "User Modeling and User-Adapted Interaction",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/umuai/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 2.292,
            "category": 0,
            "symbolSize": 32.2647276628,
            "field": "HCI"
        },
        {
            "id": "IJHCI",
            "name": "IJHCI",
            "fullName": "International Journal of Human-Computer Interaction",
            "Press": "Taylor & Francis",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ijhci/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.26,
            "category": 0,
            "symbolSize": 26.3407664645,
            "field": "HCI"
        },
        {
            "id": "THMS",
            "name": "THMS",
            "fullName": "IEEE Transactions on Human-Machine Systems",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/thms/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.8,
            "category": 0,
            "symbolSize": 29.7798156062,
            "field": "HCI"
        },
        {
            "id": "BIT",
            "name": "BIT",
            "fullName": "Behaviour & Information Technology",
            "Press": "Taylor & Francis",
            "DBLP": "http://dblp.uni-trier.de/db/journals/behaviourIT/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 1.211,
            "category": 0,
            "symbolSize": 25.9753804391,
            "field": "HCI"
        },
        {
            "id": "PMC",
            "name": "PMC",
            "fullName": "Pervasive and Mobile Computing",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/percom/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.719,
            "category": 0,
            "symbolSize": 29.3204230273,
            "field": "HCI"
        },
        {
            "id": "PUC",
            "name": "PUC",
            "fullName": "Personal and Ubiquitous Computing",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/puc/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.498,
            "category": 0,
            "symbolSize": 27.9746266743,
            "field": "HCI"
        }
    ],
    links: [
        {
            "source": "TOCHI",
            "target": "CCFA"
        },
        {
            "source": "IJHCS",
            "target": "CCFA"
        },
        {
            "source": "CSCW",
            "target": "CCFB"
        },
        {
            "source": "HCI",
            "target": "CCFB"
        },
        {
            "source": "IWC",
            "target": "CCFB"
        },
        {
            "source": "UMUAI",
            "target": "CCFB"
        },
        {
            "source": "IJHCI",
            "target": "CCFB"
        },
        {
            "source": "THMS",
            "target": "CCFB"
        },
        {
            "source": "BIT",
            "target": "CCFC"
        },
        {
            "source": "PMC",
            "target": "CCFC"
        },
        {
            "source": "PUC",
            "target": "CCFC"
        },
        {
            "source": "TOCHI",
            "target": "CSA4"
        },
        {
            "source": "IJHCS",
            "target": "CSA3"
        },
        {
            "source": "CSCW",
            "target": "CSA3"
        },
        {
            "source": "HCI",
            "target": "CSA2"
        },
        {
            "source": "IWC",
            "target": "CSA4"
        },
        {
            "source": "UMUAI",
            "target": "CSA2"
        },
        {
            "source": "IJHCI",
            "target": "CSA4"
        },
        {
            "source": "THMS",
            "target": "CSA3"
        },
        {
            "source": "BIT",
            "target": "CSA4"
        },
        {
            "source": "PMC",
            "target": "CSA3"
        },
        {
            "source": "PUC",
            "target": "CSA3"
        }
    ]
};

var graph_Others = {
    nodes: [
        {
            "id": "Proc. IEEE",
            "name": "Proc. IEEE",
            "fullName": "Proceedings of the IEEE",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/pieee/",
            "CCF": "A",
            "CSA": 1,
            "IF_2015": 5.629,
            "category": 0,
            "symbolSize": 42.5484339281,
            "field": "Other"
        },
        {
            "id": "JACM",
            "name": "JACM",
            "fullName": "Journal of the ACM",
            "Press": "ACM",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jacm/",
            "CCF": "A",
            "CSA": 3,
            "IF_2015": 1.803,
            "category": 0,
            "symbolSize": 29.7965156772,
            "field": "Other"
        },
        {
            "id": "BioInfo",
            "name": "BioInfo",
            "fullName": "Bioinformatics",
            "Press": "Oxford University Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/bioinformatics/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 5.766,
            "category": 0,
            "symbolSize": 42.8450020411,
            "field": "Other"
        },
        {
            "id": "BB",
            "name": "BB",
            "fullName": "Briefings in Bioinformatics",
            "Press": "Oxford University Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/bib/",
            "CCF": "B",
            "CSA": 1,
            "IF_2015": 8.399,
            "category": 0,
            "symbolSize": 47.6171493121,
            "field": "Other"
        },
        {
            "id": "Cognition",
            "name": "Cognition",
            "fullName": "Cognition:International Journal of Cognitive Science",
            "Press": "Elsevier",
            "DBLP": "http://www.journals.elsevier.com/cognition/",
            "CCF": "B",
            "CSA": 5,
            "IF_2015": 0.0,
            "category": 0,
            "symbolSize": 0.0,
            "field": "Other"
        },
        {
            "id": "PLOSCB",
            "name": "PLOSCB",
            "fullName": "PLOS Computational Biology",
            "Press": "Public Library of Science",
            "DBLP": "http://dblp.uni-trier.de/db/journals/ploscb/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 4.587,
            "category": 0,
            "symbolSize": 40.0670568991,
            "field": "Other"
        },
        {
            "id": "TMI",
            "name": "TMI",
            "fullName": "IEEE Transactions on Medical Imaging",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tmi/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 3.756,
            "category": 0,
            "symbolSize": 37.7209971782,
            "field": "Other"
        },
        {
            "id": "TGARS",
            "name": "TGARS",
            "fullName": "IEEE Transactions on Geoscience and Remote Sensing",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tgrs/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 3.36,
            "category": 0,
            "symbolSize": 36.4471417938,
            "field": "Other"
        },
        {
            "id": "TITS",
            "name": "TITS",
            "fullName": "IEEE Transactions on Intelligent Transportation Systems",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tits/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 2.534,
            "category": 0,
            "symbolSize": 33.3330743153,
            "field": "Other"
        },
        {
            "id": "TR",
            "name": "TR",
            "fullName": "IEEE Transactions on Robotics",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/trob/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 2.028,
            "category": 0,
            "symbolSize": 30.9908029847,
            "field": "Other"
        },
        {
            "id": "TASAE",
            "name": "TASAE",
            "fullName": "IEEE Transactions on Automation Science and Engineering",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tase/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 2.696,
            "category": 0,
            "symbolSize": 34.003105627,
            "field": "Other"
        },
        {
            "id": "JCST",
            "name": "JCST",
            "fullName": "Journal of Computer Science and Technology",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jcst/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.475,
            "category": 0,
            "symbolSize": 18.3489770495,
            "field": "Other"
        },
        {
            "id": "JAMIA",
            "name": "JAMIA",
            "fullName": "Journal of the American Medical Informatics Association",
            "Press": "BMJ Journals",
            "DBLP": "http://dblp.uni-trier.de/db/journals/jamia/",
            "CCF": "B",
            "CSA": 2,
            "IF_2015": 3.428,
            "category": 0,
            "symbolSize": 36.6744078136,
            "field": "Other"
        },
        {
            "id": "SCIS",
            "name": "SCIS",
            "fullName": "Science China Information Sciences",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/chinaf/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 0.885,
            "category": 0,
            "symbolSize": 23.2075061281,
            "field": "Other"
        },
        {
            "id": "CompJ",
            "name": "CompJ",
            "fullName": "The Computer Journal",
            "Press": "Oxford University Press",
            "DBLP": "http://dblp.uni-trier.de/db/journals/cj/",
            "CCF": "B",
            "CSA": 4,
            "IF_2015": 1.0,
            "category": 0,
            "symbolSize": 24.2601513196,
            "field": "Other"
        },
        {
            "id": "WWW",
            "name": "WWW",
            "fullName": "World Wide Web Journal",
            "Press": "Springer",
            "DBLP": "http://dblp.uni-trier.de/db/journals/wwwj/",
            "CCF": "B",
            "CSA": 3,
            "IF_2015": 1.539,
            "category": 0,
            "symbolSize": 28.2354727522,
            "field": "Other"
        },
        {
            "id": "BMCBio",
            "name": "BMCBio",
            "fullName": "BMC Bioinformatics",
            "Press": "BioMed Central",
            "DBLP": "http://dblp.uni-trier.de/db/journals/bmcbi/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 2.435,
            "category": 0,
            "symbolSize": 32.9063874434,
            "field": "Other"
        },
        {
            "id": "CyberS",
            "name": "CyberS",
            "fullName": "Cybernetics and Systems",
            "Press": "Taylor & Francis",
            "DBLP": "http://dblp.uni-trier.de/db/journals/cas/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.88,
            "category": 0,
            "symbolSize": 23.1594796517,
            "field": "Other"
        },
        {
            "id": "GRSL",
            "name": "GRSL",
            "fullName": "IEEE Geoscience and Remote Sensing Letters",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/lgrs/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 2.228,
            "category": 0,
            "symbolSize": 31.9671051357,
            "field": "Other"
        },
        {
            "id": "TITB",
            "name": "TITB",
            "fullName": "IEEE Transactions on Information Technology in Biomedicine",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/titb/",
            "CCF": "C",
            "CSA": 5,
            "IF_2015": 2.439,
            "category": 0,
            "symbolSize": 32.9238958092,
            "field": "Other"
        },
        {
            "id": "TCBB",
            "name": "TCBB",
            "fullName": "IEEE-ACM Transactions on Computational Biology and Bioinformatics",
            "Press": "IEEE",
            "DBLP": "http://dblp.uni-trier.de/db/journals/tcbb/",
            "CCF": "C",
            "CSA": 3,
            "IF_2015": 1.609,
            "category": 0,
            "symbolSize": 28.6685976758,
            "field": "Other"
        },
        {
            "id": "IETITS",
            "name": "IETITS",
            "fullName": "IET Intelligent Transport Systems",
            "Press": "IET",
            "DBLP": "http://digital-library.theiet.org/content/journals/iet-its",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.843,
            "category": 0,
            "symbolSize": 22.7976470338,
            "field": "Other"
        },
        {
            "id": "MIA",
            "name": "MIA",
            "fullName": "Medical Image Analysis",
            "Press": "Elsevier",
            "DBLP": "http://dblp.uni-trier.de/db/journals/mia/",
            "CCF": "C",
            "CSA": 2,
            "IF_2015": 4.565,
            "category": 0,
            "symbolSize": 40.0097238456,
            "field": "Other"
        },
        {
            "id": "FCS",
            "name": "FCS",
            "fullName": "Frontiers of Computer Science",
            "Press": "Speinger",
            "DBLP": "http://dblp.uni-trier.de/db/journals/fcsc/",
            "CCF": "C",
            "CSA": 4,
            "IF_2015": 0.66,
            "category": 0,
            "symbolSize": 20.8128918481,
            "field": "Other"
        }
    ],
    links: [
        {
            "source": "Proc. IEEE",
            "target": "CCFA"
        },
        {
            "source": "JACM",
            "target": "CCFA"
        },
        {
            "source": "BioInfo",
            "target": "CCFB"
        },
        {
            "source": "BB",
            "target": "CCFB"
        },
        {
            "source": "Cognition",
            "target": "CCFB"
        },
        {
            "source": "PLOSCB",
            "target": "CCFB"
        },
        {
            "source": "TMI",
            "target": "CCFB"
        },
        {
            "source": "TGARS",
            "target": "CCFB"
        },
        {
            "source": "TITS",
            "target": "CCFB"
        },
        {
            "source": "TR",
            "target": "CCFB"
        },
        {
            "source": "TASAE",
            "target": "CCFB"
        },
        {
            "source": "JCST",
            "target": "CCFB"
        },
        {
            "source": "JAMIA",
            "target": "CCFB"
        },
        {
            "source": "SCIS",
            "target": "CCFB"
        },
        {
            "source": "CompJ",
            "target": "CCFB"
        },
        {
            "source": "WWW",
            "target": "CCFB"
        },
        {
            "source": "BMCBio",
            "target": "CCFC"
        },
        {
            "source": "CyberS",
            "target": "CCFC"
        },
        {
            "source": "GRSL",
            "target": "CCFC"
        },
        {
            "source": "TITB",
            "target": "CCFC"
        },
        {
            "source": "TCBB",
            "target": "CCFC"
        },
        {
            "source": "IETITS",
            "target": "CCFC"
        },
        {
            "source": "MIA",
            "target": "CCFC"
        },
        {
            "source": "FCS",
            "target": "CCFC"
        },
        {
            "source": "Proc. IEEE",
            "target": "CSA1"
        },
        {
            "source": "JACM",
            "target": "CSA3"
        },
        {
            "source": "BioInfo",
            "target": "CSA2"
        },
        {
            "source": "BB",
            "target": "CSA1"
        },
        {
            "source": "Cognition",
            "target": "CSA5"
        },
        {
            "source": "PLOSCB",
            "target": "CSA2"
        },
        {
            "source": "TMI",
            "target": "CSA2"
        },
        {
            "source": "TGARS",
            "target": "CSA2"
        },
        {
            "source": "TITS",
            "target": "CSA2"
        },
        {
            "source": "TR",
            "target": "CSA2"
        },
        {
            "source": "TASAE",
            "target": "CSA2"
        },
        {
            "source": "JCST",
            "target": "CSA4"
        },
        {
            "source": "JAMIA",
            "target": "CSA2"
        },
        {
            "source": "SCIS",
            "target": "CSA4"
        },
        {
            "source": "CompJ",
            "target": "CSA4"
        },
        {
            "source": "WWW",
            "target": "CSA3"
        },
        {
            "source": "BMCBio",
            "target": "CSA3"
        },
        {
            "source": "CyberS",
            "target": "CSA4"
        },
        {
            "source": "GRSL",
            "target": "CSA3"
        },
        {
            "source": "TITB",
            "target": "CSA5"
        },
        {
            "source": "TCBB",
            "target": "CSA3"
        },
        {
            "source": "IETITS",
            "target": "CSA4"
        },
        {
            "source": "MIA",
            "target": "CSA2"
        },
        {
            "source": "FCS",
            "target": "CSA4"
        }
    ]
};

option_graph = {
    tooltip: {
        formatter: function (params) {
            if (params.dataType == 'node')
                return;
            else if (params.dataType == 'edge')
                return '期刊' + params.data.source + ', 位于' + params.data.target + '区';
        }
    },
    /*legend: {
        data:['计算机体系结构','计算机网络']
    },*/
    legend: {
        show: true,
        //type: 'scroll',
        orient: 'vertical',
        /**图例的位置**/
        left: 0,
        top: 10,
        /*************/
        data: [
            '期刊', 'CCF A区', 'CCF B区', 'CCF C区', 'CCF暂未收录',
            'CSA 1区', 'CSA 2区', 'CSA 3区', 'CSA 4区', 'CSA暂未收录'
        ]
    },
    /*color: ['rgb(3,54,73)', 'rgb(128,143,128)', 'rgb(93,172,129)', 'rgb(168,216,185)', 'rgb(145,180,147)',
        'rgb(225,159,180)', 'rgb(225,107,140)', 'rgb(202,173,95)', 'rgb(191,103,102)', 'rgb(134,71,63)'],*/
    color: ['rgb(3,54,73)', 'rgb(168,216,185)', 'rgb(93,172,129)', 'rgb(145,180,147)', 'rgb(128,143,128)',
        'rgb(100,54,60)', 'rgb(134,71,63)', 'rgb(191,103,102)', 'rgb(225,107,140)', 'rgb(225,159,180)'],
    series: [
        {
            name: '',
            type: 'graph',
            layout: 'circular',
            roam: true,
            //focusNodeAdjacency: true,
            nodes: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            focusNodeAdjacency: true,
            lineStyle: {
                normal: {
                    color: 'target',
                    curveness: 0.3,
                    width: 1.5
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    fontSize: 12,
                    distance: 5
                    //formatter: '{b}'
                }
            },
            circular: {
                rotateLabel: true
            },
        },
    ]
};

//绘制初始图表
myGraph.hideLoading();
myGraph.setOption(option_graph);

//下拉框发生改变，重新绘制
function selectChange() {
    myGraph.showLoading();
    var obj = document.getElementById('select');
    var index = obj.selectedIndex;
    var option = myGraph.getOption();
    var nodes = graph.nodes.slice(0);
    var links = graph.links.slice(0);
    var new_nodes = null, new_links = null;

    //console.log(index);

    //判断选择的是哪种CCF类型
    switch (index) {
        case 0:
            break;
        case 1:
            new_nodes = graph_CA.nodes;
            new_links = graph_CA.links;
            break;
        case 2:
            new_nodes = graph_CN.nodes;
            new_links = graph_CN.links;
            break;
        case 3:
            new_nodes = graph_IS.nodes;
            new_links = graph_IS.links;
            break;
        case 4:
            new_nodes = graph_SE.nodes;
            new_links = graph_SE.links;
            break;
        case 5:
            new_nodes = graph_DB.nodes;
            new_links = graph_DB.links;
            break;
        case 6:
            new_nodes = graph_CST.nodes;
            new_links = graph_CST.links;
            break;
        case 7:
            new_nodes = graph_CG.nodes;
            new_links = graph_CG.links;
            break;
        case 8:
            new_nodes = graph_AI.nodes;
            new_links = graph_AI.links;
            break;
        case 9:
            new_nodes = graph_HCI.nodes;
            new_links = graph_HCI.links;
            break;
        case 10:
            new_nodes = graph_Others.nodes;
            new_links = graph_Others.links;
            break;
    }

    //处理数据，准备重绘
    if (new_links == null || new_nodes == null) {/*什么都不做*/ }
    else {
        new_nodes.forEach(function (node) {
            node.symbolSize = node.IF_2015 * 10 + 5;
            nodes.push(node);
        });
        new_links.forEach(function (link) {
            links.push(link);
        });
    }

    //重绘
    option.series[0].nodes = nodes;
    option.series[0].links = links;
    myGraph.hideLoading();
    myGraph.setOption(option);
}

//点击期刊节点时
myGraph.on('contextmenu', function (params) {
    //如果点击的是边，返回
    if (params.dataType == 'edge')
        return;

    //如果不是点击期刊节点,返回
    if (params.data.category != 0)
        return;

    var details = params.data;
    var abbreviation = document.getElementById("abbreviation");
    var fullname = document.getElementById("fullname");
    var press = document.getElementById("press");
    var dblp = document.getElementById("dblp");
    abbreviation.innerHTML = details.name;
    fullname = details.fullName;
    
});