const utils = require('./utils');

module.exports = {
    getTempFolder: function (timestamp) {
        let pattern = '/tmp/marine/{timestamp}';
        return pattern.replace('{timestamp}', timestamp);
    },
    getUrlListFile: function (timestamp) {
        let pattern = '/tmp/marine/{timestamp}/files/url-list.txt';
        return pattern.replace('{timestamp}', timestamp);
    },
    getReadMePath: function (timestamp) {
        let pattern = '/tmp/marine/{timestamp}/files/README.txt';
        return pattern.replace('{timestamp}', timestamp);
    },
    getUrlListZip: function (timestamp) {
        let pattern = '/tmp/marine/{timestamp}/url-list.zip';
        return pattern.replace('{timestamp}', timestamp);
    },
    getDownloadFolder: function (timestamp) {
        let pattern = '/tmp/marine/{timestamp}/files';
        return pattern.replace('{timestamp}', timestamp);
    },
    products: [
        {
            name: 'Bathymetry',
            tableName: 'bathymetry',
            bundleTable: 'bathymetry_bundle',
            geometryTable: 'bathymetry_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from bathymetry_bundle"
        },
        {
            name: 'Backscatter',
            tableName: 'backscatter',
            bundleTable: 'backscatter_bundle',
            geometryTable: 'backscatter_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from backscatter_bundle"
        },
        {
            name: 'Hillshade',
            tableName: 'hillshade',
            bundleTable: 'hillshade_bundle',
            geometryTable: 'hillshade_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from hillshade_bundle"
        },
        {
            name: 'Sidescan',
            tableName: 'sidescan',
            bundleTable: 'sidescan_bundle',
            geometryTable: 'sidescan_geoms',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from sidescan_bundle"
        },
        {
            name: 'Sub-bottom Profile',
            tableName: 'sbp',
            bundleTable: 'sbp_bundle',
            geometryTable: 'sbp_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from sbp_bundle"
        },
        {
            name: 'Tides',
            bundleTable: 'tides',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from tides"
        },
        {
            name: 'Water Column',
            tableName: 'wc',
            bundleTable: 'wc_bundle',
            geometryTable: 'wc_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from wc_bundle"
        },
        {
            name: 'Camera',
            tableName: 'camera',
            bundleTable: 'camera_bundle',
            geometryTable: 'camera_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from camera_bundle"
        },
        {
            name: 'Sound Velocity Profile',
            tableName: 'svp',
            bundleTable: 'svp_bundle',
            geometryTable: 'svp_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from svp_bundle"
        },
        {
            name: 'Unprocessed Multibeam',
            tableName: 'mbes_raw',
            bundleTable: 'mbes_raw_bundle',
            geometryTable: 'mbes_raw_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from mbes_raw_bundle"
        },
        {
            name: 'Unprocessed Sidescan',
            tableName: 'sidescan_raw',
            bundleTable: 'sidescan_raw_bundle',
            geometryTable: 'sidescan_raw_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from sidescan_raw_bundle"
        },
        {
            name: 'Phase 1 Data',
            tableName: 'phase1',
            bundleTable: 'phase1_bundle',
            geometryTable: 'phase1_geoms',
            pathStart: 'pw31/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from phase1_bundle"
        },
        {
            name: 'Navigation',
            tableName: 'nav',
            bundleTable: 'nav_bundle',
            geometryTable: 'nav_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from nav_bundle"
        },
        {
            name: 'Platform Raw',
            bundleTable: 'platform_raw',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from platform_raw"
        },
        {
            name: 'Heave',
            tableName: 'heave',
            bundleTable: 'heave_bundle',
            geometryTable: 'heave_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from heave_bundle"
        },
        {
            name: 'Weather',
            tableName: 'weather',
            bundleTable: 'weather_bundle',
            geometryTable: 'weather_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from weather_bundle"
        },
        {
            name: 'Sniffer',
            tableName: 'sniffer',
            bundleTable: 'sniffer_bundle',
            geometryTable: 'sniffer_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from sniffer_bundle"
        },
        {
            name: 'Visualisation and Coverage Summaries',
            tableName: 'vis_summary',
            bundleTable: 'vis_summary_bundle',
            geometryTable: 'vis_summary_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: "select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from vis_summary_bundle"
        }
    ]
};
