/* --------------------------------地图初始信息配置-------------------------------- */

var BASE_URL = 'https://kfront.kedacom.com/mapboxServer';
/*!
 *三维部分配置文件
 */
var MapConfig = {
    mapInitParams: {
        baseUrl: '/3Dmap/global/',
        extent: { //初始化范围
            xmin: 120.9935685847,
            ymin: 30.9091432009,
            xmax: 121.6418614541,
            ymax: 31.3135256362
        },
        spatialReference: { //地图空间参考坐标系
            wkid: 4326
        },
        /*备注说明:配置底图列表
         *type代表地图服务类型(0代表ArcGisMapServerImageryProvider;1代表createOpenStreetMapImageryProvider;
                         2代表WebMapTileServiceImageryProvider;3代表createTileMapServiceImageryProvider;
                         4 代表UrlTemplateImageryProvider;5 代表WebMapServiceImageryProviderr)
         *proxyUrl代理请求服务
         *iconUrl图标
         *name显示名称
         *Url地图Url
         *maxZoom最大层级
         */
        imageryViewModels: [
            // {
            //     "id": 0,
            //     "name": "tianditu",
            //     className: "imgType",
            //     type: 0,
            //     proxyUrl: '',
            //     maxZoom: 18,
            //     url: 'http://t1.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=18a298086cbdaf196323315d160352cc'
            // },
            {
                id: 1,
                "name": "江苏",
                className: "imgType",
                type: 4,
                proxyUrl: '',
                maxZoom: 18,
                url: 'https://10.68.8.229:9999/kgis/rest/services/jiangsu_0_19/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}'
            },
            // {
            //     "id": 2,
            //     "name": "安徽电子",
            //     className: "imgType",
            //     type: 0,
            //     proxyUrl: '',
            //     maxZoom: 18,
            //     url: 'https://10.68.8.229:9999/kgis/rest/services/anhui/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}'
            // },
            // {
            //     "id": 3,
            //     "name": "安徽影像图",
            //     className: "imgType",
            //     type: 0,
            //     proxyUrl: '',
            //     maxZoom: 18,
            //     url: 'https://10.68.8.229:9999/kgis/rest/services/shanghai_0_19/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}'
            // },
            {
                "id": 4,
                "name": "上海影像图",
                className: "imgType",
                type: 0,
                proxyUrl: '',
                maxZoom: 18,
                url: 'https://10.68.8.229:9999/kgis/rest/services/shanghai_0_19/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}'
            },

            // {
            //     id: 3,
            //     "name": "福建南坪",
            //     className: "imgType",
            //     type: 0,
            //     proxyUrl: '',
            //     maxZoom: 18,
            //     url:'http://10.68.8.229:52525/mix/nanping0_19/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}'
            //     // url:'http://10.68.8.229:52525/mix/nanping0_19/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}'
            // },
            // {
            //     id: 2,
            //     "name": "福建南坪",
            //     className: "imgType",
            //     type: 0,
            //     proxyUrl: '',
            //     maxZoom: 18,
            //     url: 'http://10.68.8.229:8888/kgis/rest/services/nanping0_19/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}'
            // },

        ],

    },
    //地形图
    // Terrain: {
    // "30m": {
    //     "url": "http://10.168.1.23/terrain1/terrian",
    //     "pitch": -30,
    //     "height": 10000
    // },
    // "云南": {
    //     "url": "http://10.168.1.23/terrain1/terrian",
    //     "pitch": -30,
    //     "height": 10000
    // }
    // },
    Terrain: 'https://10.68.2.142:9090/jiangsushengandshanghai/',
    PointCloudTiles3D: [{
        id: 'zjwg',
        name: "镇江文广",
        // url: "https://10.68.2.142:9090/zhenjiang-3dtiles/tileset.json",
        // url:"https://www.3dcitydb.net/3dcitydb/fileadmin/mydata/NYC_Pointcloud/NYC_Cesium_PointCloud/Tiles/1_0/Tiles/0_1/Tiles/0_1/Tiles/0_1/Tiles/0_0/Tiles/0_0/Tiles/0_0/Tiles/1_0/tileset.json?v=0.0",
        // url:"http://10.67.8.1:8090/PointCloud/PointCloudWithPerPointProperties/tileset.json",
        // url:"http://localhost:9002/model/f08b3550220411ea9899cfbc7e647007/tileset.json",
        // url:"http://10.67.8.1:8090/models/pcmodel/tileset.json",
        // url:"http://10.67.8.1:8090/models/meshDataModel/tileset.json",
        // url:"http://10.67.8.1:8090/PointModelJson/kance/tileset.json",
        // url:"https://10.68.2.142:9090/suzhou_kd/models/3dtiles/suzhou1218/tileset.json",
        cameraDestination: {
            longitude: 119.51995263922493,
            latitude: 32.297192691227078,
            height: 50.45801866787499
        },
        cameraOrientation: {
            heading: 173.78196158742224,
            pitch: -17.442515766948937,
            roll: 0,
        },
        maximumScreenSpaceError: 2
    }],
    //三维倾斜摄影配置信息
    Tiles3D: [
        {
            id: 'njxfd',
            name: "科达",
            url: "https://10.68.2.142:9090/jingye/tileset.json",
            cameraDestination: {
                longitude: 120.51995263922493,
                latitude: 31.297192691227078,
                height: 50.45801866787499
            },
            cameraOrientation: {
                heading: 173.78196158742224,
                pitch: -17.442515766948937,
                roll: 0,
            },
            maximumScreenSpaceError: 2
        },
        {
            id: 'zjwg',
            name: "苏州兴业",
            // url: "https://10.68.2.142:9090/zhenjiang-3dtiles/tileset.json",
            // url:"https://www.3dcitydb.net/3dcitydb/fileadmin/mydata/NYC_Pointcloud/NYC_Cesium_PointCloud/Tiles/1_0/Tiles/0_1/Tiles/0_1/Tiles/0_1/Tiles/0_0/Tiles/0_0/Tiles/0_0/Tiles/1_0/tileset.json?v=0.0",
            // url:"http://10.67.8.1:8090/PointCloud/PointCloudWithPerPointProperties/tileset.json",
            // url:"http://localhost:9002/model/f08b3550220411ea9899cfbc7e647007/tileset.json",
            // url:"http://10.67.8.1:8090/models/pcmodel/tileset.json",
            // url:"http://10.67.8.1:8090/models/meshDataModel/tileset.json",
            // url:"https://10.68.2.142:9090/suzhou_kd/models/3dtiles/suzhou1218/tileset.json",
            // url:"http://10.67.8.1:8090/3dtiles/bim-xuexiao/jz/tileset.json",//bim学校
            // url:"http://data.marsgis.cn/3dtiles/jzw-shanghai/tileset.json",
            url:"https://10.68.2.142:9090/suzhouxingye/tileset.json",
            cameraDestination: {
                longitude: 119.51995263922493,
                latitude: 32.297192691227078,
                height: 50.45801866787499
            },
            cameraOrientation: {
                heading: 173.78196158742224,
                pitch: -17.442515766948937,
                roll: 0,
            },
            maximumScreenSpaceError: 2
        },
        // {
        //     id: 'jingqu',
        //     name: "jingqu",
        //     url: "https://10.68.2.142:9090/jingqu/tileset.json",
        //     cameraDestination: {
        //         longitude: 119.51995263922493,
        //         latitude: 32.297192691227078,
        //         height: 50.45801866787499
        //     },
        //     cameraOrientation: {
        //         heading: 173.78196158742224,
        //         pitch: -17.442515766948937,
        //         roll: 0,
        //     },
        //     maximumScreenSpaceError: 2
        // },
        // {
        //     id: 'jszd',
        //     name: "江苏中队",
        //     url: "https://10.68.2.142:9090/terra_b3dms/tileset.json",
        //     cameraDestination: {
        //         longitude: 120.51995263922493,
        //         latitude: 31.297192691227078,
        //         height: 50.45801866787499
        //     },
        //     cameraOrientation: {
        //         heading: 173.78196158742224,
        //         pitch: -17.442515766948937,
        //         roll: 0,
        //     },
        //     maximumScreenSpaceError: 2
        // },
        // {
        //     id: 'keda',
        //     name: "科达",
        //     // url: "http://www4.skylineglobe.com/SG/b3dm/OSGB_Large_3DML.2735238/tileset.json",
        //     url:'http://www4.skylineglobe.com/SG/b3dm/OSGB_Large_3DML.2735238/tileset.json',
        //     cameraDestination: {
        //         longitude: 120.51995263922493,
        //         latitude: 31.297192691227078,
        //         height: 50.45801866787499
        //     },
        //     cameraOrientation: {
        //         heading: 173.78196158742224,
        //         pitch: -17.442515766948937,
        //         roll: 0,
        //     },
        //     maximumScreenSpaceError: 2
        // }

    ],
    CTserverConfig: {
        CT_SERVER_URL: BASE_URL,
        TOKEN: 'BBF263F1920945C4A282FCD19D53B0C2'
    },
    /**
     * WS SERVER 相关配置
     * @param CT_SERVER_URL
     */
    WS_SERVERS: {
        // WebSocket 通道连接地址
        WS_SERVER:'https://kfront.kedacom.com/mapboxServer' + '/ws-server/ctserver',
        // 私有空间订阅地址(2.0完成后不支持)
        SUBSCRIBE_PRIVATE_SERVER:'https://kfront.kedacom.com/mapboxServer' + '/ws-server/trace/subscribe',
        // 私有空间取消订阅地址(2.0完成后不支持)
        UNSUBSCRIBE_PRIVATE_SERVER:'https://kfront.kedacom.com/mapboxServer' + '/ws-server/trace/unsubscribe',
        // 公有空间订阅地址
        SUBSCRIBE_PUBLIC_SERVER:'https://kfront.kedacom.com/mapboxServer' + '/ws-server/trace/subscribeDevice',
        // 公有空间取消订阅地址
        UNSUBSCRIBE_PUBLIC_SERVER:'https://kfront.kedacom.com/mapboxServer' + '/ws-server/trace/unsubscribeDevice',
        SUBSCRIBE_GPS_DEVICE:'https://kfront.kedacom.com/mapboxServer' + '/ws-server/trace/subscribeGpsDevice',
        UNSUBSCRIBE_GPS_DEVICE:'https://kfront.kedacom.com/mapboxServer' + '/ws-server/trace/unsubscribeDevice'
    },
}