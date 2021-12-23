const DATABASE_SCHEMA = 'marine_mh370';

module.exports = {
    getTempFolder: function (timestamp) {
        let pattern = '/tmp/mh370-api/{timestamp}';
        return pattern.replace('{timestamp}', timestamp);
    },
    getUrlListFile: function (timestamp) {
        let pattern = '/tmp/mh370-api/{timestamp}/files/url-list.txt';
        return pattern.replace('{timestamp}', timestamp);
    },
    getReadMePath: function (timestamp) {
        let pattern = '/tmp/mh370-api/{timestamp}/files/README.txt';
        return pattern.replace('{timestamp}', timestamp);
    },
    getUrlListZip: function (timestamp) {
        let pattern = '/tmp/mh370-api/{timestamp}/url-list.zip';
        return pattern.replace('{timestamp}', timestamp);
    },
    getDownloadFolder: function (timestamp) {
        let pattern = '/tmp/mh370-api/{timestamp}/files';
        return pattern.replace('{timestamp}', timestamp);
    },
    databaseSchema: DATABASE_SCHEMA,
    products: [
        {
            name: 'Bathymetry',
            tableName: DATABASE_SCHEMA + '.bathymetry',
            bundleTable: DATABASE_SCHEMA + '.bathymetry_bundle',
            geometryTable: DATABASE_SCHEMA + '.bathymetry_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.bathymetry_bundle`
        },
        {
            name: 'Backscatter',
            tableName: DATABASE_SCHEMA + '.backscatter',
            bundleTable: DATABASE_SCHEMA + '.backscatter_bundle',
            geometryTable: DATABASE_SCHEMA + '.backscatter_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.backscatter_bundle`
        },
        {
            name: 'Hillshade',
            tableName: DATABASE_SCHEMA + '.hillshade',
            bundleTable: DATABASE_SCHEMA + '.hillshade_bundle',
            geometryTable: DATABASE_SCHEMA + '.hillshade_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.hillshade_bundle`
        },
        {
            name: 'Sidescan',
            tableName: DATABASE_SCHEMA + '.sidescan',
            bundleTable: DATABASE_SCHEMA + '.sidescan_bundle',
            geometryTable: DATABASE_SCHEMA + '.sidescan_geoms',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.sidescan_bundle`
        },
        {
            name: 'Sub-bottom Profile',
            tableName: DATABASE_SCHEMA + '.sbp',
            bundleTable: DATABASE_SCHEMA + '.sbp_bundle',
            geometryTable: DATABASE_SCHEMA + '.sbp_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.sbp_bundle`
        },
        {
            name: 'Tides',
            bundleTable: DATABASE_SCHEMA + '.tides',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.tides`
        },
        {
            name: 'Water Column',
            tableName: DATABASE_SCHEMA + '.wc',
            bundleTable: DATABASE_SCHEMA + '.wc_bundle',
            geometryTable: DATABASE_SCHEMA + '.wc_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.wc_bundle`
        },
        {
            name: 'Camera',
            tableName: DATABASE_SCHEMA + '.camera',
            bundleTable: DATABASE_SCHEMA + '.camera_bundle',
            geometryTable: DATABASE_SCHEMA + '.camera_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.camera_bundle`
        },
        {
            name: 'Sound Velocity Profile',
            tableName: DATABASE_SCHEMA + '.svp',
            bundleTable: DATABASE_SCHEMA + '.svp_bundle',
            geometryTable: DATABASE_SCHEMA + '.svp_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.svp_bundle`
        },
        {
            name: 'Unprocessed Multibeam',
            tableName: DATABASE_SCHEMA + '.mbes_raw',
            bundleTable: DATABASE_SCHEMA + '.mbes_raw_bundle',
            geometryTable: DATABASE_SCHEMA + '.mbes_raw_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.mbes_raw_bundle`
        },
        {
            name: 'Unprocessed Sidescan',
            tableName: DATABASE_SCHEMA + '.sidescan_raw',
            bundleTable: DATABASE_SCHEMA + '.sidescan_raw_bundle',
            geometryTable: DATABASE_SCHEMA + '.sidescan_raw_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.sidescan_raw_bundle`
        },
        {
            name: 'Phase 1 Data',
            tableName: DATABASE_SCHEMA + '.phase1',
            bundleTable: DATABASE_SCHEMA + '.phase1_bundle',
            geometryTable: DATABASE_SCHEMA + '.phase1_geoms',
            pathStart: 'pw31/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.phase1_bundle`
        },
        {
            name: 'Navigation',
            tableName: DATABASE_SCHEMA + '.nav',
            bundleTable: DATABASE_SCHEMA + '.nav_bundle',
            geometryTable: DATABASE_SCHEMA + '.nav_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.nav_bundle`
        },
        {
            name: 'Platform Raw',
            bundleTable: DATABASE_SCHEMA + '.platform_raw',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.platform_raw`
        },
        {
            name: 'Heave',
            tableName: DATABASE_SCHEMA + '.heave',
            bundleTable: DATABASE_SCHEMA + '.heave_bundle',
            geometryTable: DATABASE_SCHEMA + '.heave_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.heave_bundle`
        },
        {
            name: 'Weather',
            tableName: DATABASE_SCHEMA + '.weather',
            bundleTable: DATABASE_SCHEMA + '.weather_bundle',
            geometryTable: DATABASE_SCHEMA + '.weather_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.weather_bundle`
        },
        {
            name: 'Sniffer',
            tableName: DATABASE_SCHEMA + '.sniffer',
            bundleTable: DATABASE_SCHEMA + '.sniffer_bundle',
            geometryTable: DATABASE_SCHEMA + '.sniffer_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.sniffer_bundle`
        },
        {
            name: 'Visualisation and Coverage Summaries',
            tableName: DATABASE_SCHEMA + '.vis_summary',
            bundleTable: DATABASE_SCHEMA + '.vis_summary_bundle',
            geometryTable: DATABASE_SCHEMA + '.vis_summary_geoms',
            pathStart: 'iy57/',
            columns: [
                {name: "bext", title: "File Format", type: "list"},
                {name: "bundle", title: "File Name", type: "text"},
                {name: "vessel", title: "Vessel", type: "list"},
                {name: "time_start", title: "Start Date", type: "date"},
                {name: "time_end", title: "End Date", type: "date"}
            ],
            periodSqlQuery: `select to_char(min(time_start), 'DD/MM/YYYY') as min_date, to_char(max(time_end), 'DD/MM/YYYY') as max_date from ${DATABASE_SCHEMA}.vis_summary_bundle`
        }
    ]
};
