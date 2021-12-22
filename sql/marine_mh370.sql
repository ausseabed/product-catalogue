-- Create marine_mh370 schema
CREATE SCHEMA marine_mh370;

-- Create the API user
CREATE USER mh370_api;
ALTER USER mh370_api with encrypted password '';
GRANT USAGE ON SCHEMA marine_mh370 TO mh370_api;

-- Create layer backscatter tables
CREATE TABLE marine_mh370.backscatter
(
    path       text not null
        constraint backscatter_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    geom       geometry(Geometry, 4326),
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.backscatter TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.backscatter TO mh370_api;

CREATE TABLE marine_mh370.backscatter_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.backscatter_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.backscatter_bundle TO mh370_api;

CREATE INDEX backscatter_bundle_bext_idx
    ON marine_mh370.backscatter_bundle (bext);

CREATE INDEX backscatter_bundle_bundle_idx
    ON marine_mh370.backscatter_bundle (bundle);

CREATE INDEX backscatter_bundle_file_size_idx
    ON marine_mh370.backscatter_bundle (file_size);

CREATE INDEX backscatter_bundle_geom_id_idx
    ON marine_mh370.backscatter_bundle (geom_id);

CREATE INDEX backscatter_bundle_time_end_idx
    ON marine_mh370.backscatter_bundle (time_end);

CREATE INDEX backscatter_bundle_time_start_idx
    ON marine_mh370.backscatter_bundle (time_start);

CREATE INDEX backscatter_bundle_vessel_idx
    ON marine_mh370.backscatter_bundle (vessel);

CREATE SEQUENCE marine_mh370.z_backscatter_geoms_id_seq;

CREATE TABLE marine_mh370.backscatter_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('marine_mh370.z_backscatter_geoms_id_seq'::regclass) not null
        constraint backscatter_geoms_pkey
            primary key
);

ALTER SEQUENCE marine_mh370.z_backscatter_geoms_id_seq OWNED BY marine_mh370.backscatter_geoms.id;

GRANT ALL ON TABLE marine_mh370.backscatter_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.backscatter_geoms TO mh370_api;

CREATE INDEX backscatter_geoms_geom_idx
    ON marine_mh370.backscatter_geoms using gist (geom);

CREATE INDEX backscatter_geoms_id_idx
    ON marine_mh370.backscatter_geoms (id);

CREATE TABLE marine_mh370.backscatter_lean
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.backscatter_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.backscatter_lean TO mh370_api;

CREATE INDEX backscatter_lean_bext_idx
    ON marine_mh370.backscatter_lean (bext);

CREATE INDEX backscatter_lean_bundle_idx
    ON marine_mh370.backscatter_lean (bundle);

CREATE INDEX backscatter_lean_ext_idx
    ON marine_mh370.backscatter_lean (ext);

CREATE INDEX backscatter_lean_file_size_idx
    ON marine_mh370.backscatter_lean (file_size);

CREATE INDEX backscatter_lean_geom_id_idx
    ON marine_mh370.backscatter_lean (geom_id);

CREATE INDEX backscatter_lean_name_idx
    ON marine_mh370.backscatter_lean (name);

CREATE INDEX backscatter_lean_time_end_idx
    ON marine_mh370.backscatter_lean (time_end);

CREATE INDEX backscatter_lean_time_start_idx
    ON marine_mh370.backscatter_lean (time_start);

CREATE INDEX backscatter_lean_vessel_idx
    ON marine_mh370.backscatter_lean (vessel);

-- Create layer bathymetry tables
CREATE TABLE marine_mh370.bathymetry
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    geom       geometry(Geometry, 4326),
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.bathymetry TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.bathymetry TO mh370_api;

CREATE TABLE marine_mh370.bathymetry_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.bathymetry_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.bathymetry_bundle TO mh370_api;

CREATE INDEX bathymetry_bundle_bext_idx
    ON marine_mh370.bathymetry_bundle (bext);

CREATE INDEX bathymetry_bundle_bundle_idx
    ON marine_mh370.bathymetry_bundle (bundle);

CREATE INDEX bathymetry_bundle_file_size_idx
    ON marine_mh370.bathymetry_bundle (file_size);

CREATE INDEX bathymetry_bundle_geom_id_idx
    ON marine_mh370.bathymetry_bundle (geom_id);

CREATE INDEX bathymetry_bundle_time_end_idx
    ON marine_mh370.bathymetry_bundle (time_end);

CREATE INDEX bathymetry_bundle_time_start_idx
    ON marine_mh370.bathymetry_bundle (time_start);

CREATE INDEX bathymetry_bundle_vessel_idx
    ON marine_mh370.bathymetry_bundle (vessel);

CREATE SEQUENCE marine_mh370.z_bathymetry_geoms_id_seq;

CREATE TABLE marine_mh370.bathymetry_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('marine_mh370.z_bathymetry_geoms_id_seq'::regclass) not null
);

ALTER SEQUENCE marine_mh370.z_bathymetry_geoms_id_seq OWNED BY marine_mh370.bathymetry_geoms.id;

GRANT ALL ON TABLE marine_mh370.bathymetry_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.bathymetry_geoms TO mh370_api;

CREATE INDEX bathymetry_geoms_geom_idx
    ON marine_mh370.bathymetry_geoms using gist (geom);

CREATE INDEX bathymetry_geoms_id_idx
    ON marine_mh370.bathymetry_geoms (id);

CREATE INDEX z_bathymetry_geoms_geom_idx
    ON marine_mh370.bathymetry_geoms using gist (geom);

CREATE TABLE marine_mh370.bathymetry_lean
(
    path       text not null
        constraint bathymetry_lean_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.bathymetry_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.bathymetry_lean TO mh370_api;

CREATE INDEX bathymetry_lean_bext_idx
    ON marine_mh370.bathymetry_lean (bext);

CREATE INDEX bathymetry_lean_bundle_idx
    ON marine_mh370.bathymetry_lean (bundle);

CREATE INDEX bathymetry_lean_ext_idx
    ON marine_mh370.bathymetry_lean (ext);

CREATE INDEX bathymetry_lean_file_size_idx
    ON marine_mh370.bathymetry_lean (file_size);

CREATE INDEX bathymetry_lean_geom_id_idx
    ON marine_mh370.bathymetry_lean (geom_id);

CREATE INDEX bathymetry_lean_name_idx
    ON marine_mh370.bathymetry_lean (name);

CREATE INDEX bathymetry_lean_time_end_idx
    ON marine_mh370.bathymetry_lean (time_end);

CREATE INDEX bathymetry_lean_time_start_idx
    ON marine_mh370.bathymetry_lean (time_start);

CREATE INDEX bathymetry_lean_vessel_idx
    ON marine_mh370.bathymetry_lean (vessel);

-- Create layer camera tables
CREATE TABLE marine_mh370.camera
(
    path       text not null
        constraint z_camera_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    geom       geometry(Geometry, 4326),
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.camera TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.camera TO mh370_api;

CREATE TABLE marine_mh370.camera_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.camera_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.camera_bundle TO mh370_api;

CREATE INDEX camera_bundle_bext_idx
    ON marine_mh370.camera_bundle (bext);

CREATE INDEX camera_bundle_bundle_idx
    ON marine_mh370.camera_bundle (bundle);

CREATE INDEX camera_bundle_file_size_idx
    ON marine_mh370.camera_bundle (file_size);

CREATE INDEX camera_bundle_geom_id_idx
    ON marine_mh370.camera_bundle (geom_id);

CREATE INDEX camera_bundle_time_end_idx
    ON marine_mh370.camera_bundle (time_end);

CREATE INDEX camera_bundle_time_start_idx
    ON marine_mh370.camera_bundle (time_start);

CREATE INDEX camera_bundle_vessel_idx
    ON marine_mh370.camera_bundle (vessel);

CREATE SEQUENCE marine_mh370.camera_geoms_id_seq1;

CREATE TABLE marine_mh370.camera_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('marine_mh370.camera_geoms_id_seq1'::regclass) not null
);

ALTER SEQUENCE marine_mh370.camera_geoms_id_seq1 OWNED BY marine_mh370.camera_geoms.id;

GRANT ALL ON TABLE marine_mh370.camera_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.camera_geoms TO mh370_api;

CREATE INDEX camera_geoms_geom_idx
    ON marine_mh370.camera_geoms using gist (geom);

CREATE INDEX camera_geoms_id_idx
    ON marine_mh370.camera_geoms (id);

CREATE TABLE marine_mh370.camera_lean
(
    path       text not null
        constraint camera_lean_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.camera_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.camera_lean TO mh370_api;

CREATE INDEX camera_lean_bext_idx
    ON marine_mh370.camera_lean (bext);

CREATE INDEX camera_lean_bundle_idx
    ON marine_mh370.camera_lean (bundle);

-- Create layer final_processed tables
CREATE TABLE marine_mh370.final_processed
(
    path       text not null
        constraint z_final_processed_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    geom       geometry(Geometry, 4326)
);

GRANT ALL ON TABLE marine_mh370.final_processed TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.final_processed TO mh370_api;

CREATE INDEX final_processed_geom_idx
    ON marine_mh370.final_processed using gist (geom);

CREATE INDEX z_final_processed_bext_idx
    ON marine_mh370.final_processed (bext);

CREATE INDEX z_final_processed_bundle_idx
    ON marine_mh370.final_processed (bundle);

CREATE SEQUENCE marine_mh370.fpgd_id_seq;

CREATE TABLE marine_mh370.final_processed_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('marine_mh370.fpgd_id_seq'::regclass) not null
);

ALTER SEQUENCE marine_mh370.fpgd_id_seq OWNED BY marine_mh370.final_processed_geoms.id;

GRANT ALL ON TABLE marine_mh370.final_processed_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.final_processed_geoms TO mh370_api;

CREATE TABLE marine_mh370.final_processed_lean
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint,
    bext       text
);

GRANT ALL ON TABLE marine_mh370.final_processed_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.final_processed_lean TO mh370_api;

-- Create layer heave tables
CREATE TABLE marine_mh370.heave
(
    path       text not null
        constraint heave_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    bundle     text,
    ext        text,
    vessel     text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    uri        text,
    bext       text,
    geom       geometry(Geometry, 4326),
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.heave TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.heave TO mh370_api;

CREATE TABLE marine_mh370.heave_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.heave_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.heave_bundle TO mh370_api;

CREATE INDEX heave_bundle_bext_idx
    ON marine_mh370.heave_bundle (bext);

CREATE INDEX heave_bundle_bundle_idx
    ON marine_mh370.heave_bundle (bundle);

CREATE INDEX heave_bundle_file_size_idx
    ON marine_mh370.heave_bundle (file_size);

CREATE INDEX heave_bundle_geom_id_idx
    ON marine_mh370.heave_bundle (geom_id);

CREATE INDEX heave_bundle_time_end_idx
    ON marine_mh370.heave_bundle (time_end);

CREATE INDEX heave_bundle_time_start_idx
    ON marine_mh370.heave_bundle (time_start);

CREATE INDEX heave_bundle_vessel_idx
    ON marine_mh370.heave_bundle (vessel);

CREATE TABLE marine_mh370.heave_geoms
(
    geom geometry(Geometry, 4326),
    id   serial
);

GRANT ALL ON TABLE marine_mh370.heave_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.heave_geoms TO mh370_api;

CREATE INDEX heave_geoms_geom_idx
    ON marine_mh370.heave_geoms using gist (geom);

CREATE TABLE marine_mh370.heave_lean
(
    path       text not null
        constraint heave_lean_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.heave_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.heave_lean TO mh370_api;

CREATE INDEX heave_lean_bext_idx
    ON marine_mh370.heave_lean (bext);

CREATE INDEX heave_lean_bundle_idx
    ON marine_mh370.heave_lean (bundle);

CREATE INDEX heave_lean_ext_idx
    ON marine_mh370.heave_lean (ext);

CREATE INDEX heave_lean_file_size_idx
    ON marine_mh370.heave_lean (file_size);

CREATE INDEX heave_lean_geom_id_idx
    ON marine_mh370.heave_lean (geom_id);

CREATE INDEX heave_lean_name_idx
    ON marine_mh370.heave_lean (name);

CREATE INDEX heave_lean_time_end_idx
    ON marine_mh370.heave_lean (time_end);

CREATE INDEX heave_lean_time_start_idx
    ON marine_mh370.heave_lean (time_start);

CREATE INDEX heave_lean_vessel_idx
    ON marine_mh370.heave_lean (vessel);

-- Create layer hillshade tables
CREATE TABLE marine_mh370.hillshade
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    geom       geometry(Geometry, 4326),
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.hillshade TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.hillshade TO mh370_api;

CREATE TABLE marine_mh370.hillshade_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.hillshade_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.hillshade_bundle TO mh370_api;

CREATE INDEX hillshade_bundle_bext_idx
    ON marine_mh370.hillshade_bundle (bext);

CREATE INDEX hillshade_bundle_bundle_idx
    ON marine_mh370.hillshade_bundle (bundle);

CREATE INDEX hillshade_bundle_file_size_idx
    ON marine_mh370.hillshade_bundle (file_size);

CREATE INDEX hillshade_bundle_geom_id_idx
    ON marine_mh370.hillshade_bundle (geom_id);

CREATE INDEX hillshade_bundle_time_end_idx
    ON marine_mh370.hillshade_bundle (time_end);

CREATE INDEX hillshade_bundle_time_start_idx
    ON marine_mh370.hillshade_bundle (time_start);

CREATE INDEX hillshade_bundle_vessel_idx
    ON marine_mh370.hillshade_bundle (vessel);

CREATE SEQUENCE marine_mh370.z_hillshade_geoms_id_seq;

CREATE TABLE marine_mh370.hillshade_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('marine_mh370.z_hillshade_geoms_id_seq'::regclass) not null
);

ALTER SEQUENCE marine_mh370.z_hillshade_geoms_id_seq OWNED BY marine_mh370.hillshade_geoms.id;

GRANT ALL ON TABLE marine_mh370.hillshade_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.hillshade_geoms TO mh370_api;

CREATE INDEX z_hillshade_geoms_geom_idx
    ON marine_mh370.hillshade_geoms using gist (geom);

CREATE TABLE marine_mh370.hillshade_lean
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.hillshade_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.hillshade_lean TO mh370_api;

CREATE INDEX z_hillshade_lean_bext_idx
    ON marine_mh370.hillshade_lean (bext);

CREATE INDEX z_hillshade_lean_bundle_idx
    ON marine_mh370.hillshade_lean (bundle);

CREATE INDEX z_hillshade_lean_ext_idx
    ON marine_mh370.hillshade_lean (ext);

CREATE INDEX z_hillshade_lean_file_size_idx
    ON marine_mh370.hillshade_lean (file_size);

CREATE INDEX z_hillshade_lean_geom_id_idx
    ON marine_mh370.hillshade_lean (geom_id);

CREATE INDEX z_hillshade_lean_name_idx
    ON marine_mh370.hillshade_lean (name);

CREATE INDEX z_hillshade_lean_time_end_idx
    ON marine_mh370.hillshade_lean (time_end);

CREATE INDEX z_hillshade_lean_time_start_idx
    ON marine_mh370.hillshade_lean (time_start);

CREATE INDEX z_hillshade_lean_vessel_idx
    ON marine_mh370.hillshade_lean (vessel);

-- Create layer mbes_raw tables
CREATE TABLE marine_mh370.mbes_raw
(
    path       text not null
        constraint z_mbes_raw_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    geom       geometry(Geometry, 4326),
    geom_id    bigint,
    sgeom      geometry(Geometry, 4326)
);

GRANT ALL ON TABLE marine_mh370.mbes_raw TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.mbes_raw TO mh370_api;

CREATE TABLE marine_mh370.mbes_raw_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.mbes_raw_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.mbes_raw_bundle TO mh370_api;

CREATE INDEX z_mbes_raw_bundle_bext_idx
    ON marine_mh370.mbes_raw_bundle (bext);

CREATE INDEX z_mbes_raw_bundle_bundle_idx
    ON marine_mh370.mbes_raw_bundle (bundle);

CREATE INDEX z_mbes_raw_bundle_file_size_idx
    ON marine_mh370.mbes_raw_bundle (file_size);

CREATE INDEX z_mbes_raw_bundle_geom_id_idx
    ON marine_mh370.mbes_raw_bundle (geom_id);

CREATE INDEX z_mbes_raw_bundle_time_end_idx
    ON marine_mh370.mbes_raw_bundle (time_end);

CREATE INDEX z_mbes_raw_bundle_time_start_idx
    ON marine_mh370.mbes_raw_bundle (time_start);

CREATE INDEX z_mbes_raw_bundle_vessel_idx
    ON marine_mh370.mbes_raw_bundle (vessel);

CREATE SEQUENCE marine_mh370.z_mbes_raw_geoms_id_seq;

CREATE TABLE marine_mh370.mbes_raw_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('marine_mh370.z_mbes_raw_geoms_id_seq'::regclass) not null
);

ALTER SEQUENCE marine_mh370.z_mbes_raw_geoms_id_seq OWNED BY marine_mh370.mbes_raw_geoms.id;

GRANT ALL ON TABLE marine_mh370.mbes_raw_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.mbes_raw_geoms TO mh370_api;

CREATE TABLE marine_mh370.mbes_raw_lean
(
    path       text not null
        constraint z_mbes_raw_lean_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.mbes_raw_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.mbes_raw_lean TO mh370_api;

CREATE INDEX z_mbes_raw_lean_bext_idx
    ON marine_mh370.mbes_raw_lean (bext);

CREATE INDEX z_mbes_raw_lean_bundle_idx
    ON marine_mh370.mbes_raw_lean (bundle);

CREATE INDEX z_mbes_raw_lean_ext_idx
    ON marine_mh370.mbes_raw_lean (ext);

CREATE INDEX z_mbes_raw_lean_file_size_idx
    ON marine_mh370.mbes_raw_lean (file_size);

CREATE INDEX z_mbes_raw_lean_geom_id_idx
    ON marine_mh370.mbes_raw_lean (geom_id);

CREATE INDEX z_mbes_raw_lean_name_idx
    ON marine_mh370.mbes_raw_lean (name);

CREATE INDEX z_mbes_raw_lean_time_end_idx
    ON marine_mh370.mbes_raw_lean (time_end);

CREATE INDEX z_mbes_raw_lean_time_start_idx
    ON marine_mh370.mbes_raw_lean (time_start);

CREATE INDEX z_mbes_raw_lean_vessel_idx
    ON marine_mh370.mbes_raw_lean (vessel);

-- Create layer nav tables
CREATE TABLE marine_mh370.nav
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    geom       geometry(Geometry, 4326),
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.nav TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.nav TO mh370_api;

CREATE INDEX z_nav_geom_idx1
    ON marine_mh370.nav using gist (geom);

CREATE TABLE marine_mh370.nav_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.nav_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.nav_bundle TO mh370_api;

CREATE INDEX z_nav_bundle_bext_idx2
    ON marine_mh370.nav_bundle (bext);

CREATE INDEX z_nav_bundle_bundle_idx2
    ON marine_mh370.nav_bundle (bundle);

CREATE INDEX z_nav_bundle_file_size_idx2
    ON marine_mh370.nav_bundle (file_size);

CREATE INDEX z_nav_bundle_geom_id_idx2
    ON marine_mh370.nav_bundle (geom_id);

CREATE INDEX z_nav_bundle_time_end_idx2
    ON marine_mh370.nav_bundle (time_end);

CREATE INDEX z_nav_bundle_time_start_idx2
    ON marine_mh370.nav_bundle (time_start);

CREATE INDEX z_nav_bundle_vessel_idx2
    ON marine_mh370.nav_bundle (vessel);

CREATE SEQUENCE marine_mh370.z_nav_geoms_id_seq2;

CREATE TABLE marine_mh370.nav_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('marine_mh370.z_nav_geoms_id_seq2'::regclass) not null
);

ALTER SEQUENCE marine_mh370.z_nav_geoms_id_seq2 OWNED BY marine_mh370.nav_geoms.id;

GRANT ALL ON TABLE marine_mh370.nav_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.nav_geoms TO mh370_api;

CREATE INDEX z_nav_geoms_geom_idx1
    ON marine_mh370.nav_geoms using gist (geom);

CREATE TABLE marine_mh370.nav_lean
(
    path       text not null
        constraint z_nav_lean_pkey2
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.nav_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.nav_lean TO mh370_api;

CREATE INDEX z_nav_lean_bext_idx2
    ON marine_mh370.nav_lean (bext);

CREATE INDEX z_nav_lean_bundle_idx2
    ON marine_mh370.nav_lean (bundle);

CREATE INDEX z_nav_lean_ext_idx2
    ON marine_mh370.nav_lean (ext);

CREATE INDEX z_nav_lean_file_size_idx2
    ON marine_mh370.nav_lean (file_size);

CREATE INDEX z_nav_lean_geom_id_idx2
    ON marine_mh370.nav_lean (geom_id);

CREATE INDEX z_nav_lean_name_idx2
    ON marine_mh370.nav_lean (name);

CREATE INDEX z_nav_lean_time_end_idx2
    ON marine_mh370.nav_lean (time_end);

CREATE INDEX z_nav_lean_time_start_idx2
    ON marine_mh370.nav_lean (time_start);

CREATE INDEX z_nav_lean_vessel_idx2
    ON marine_mh370.nav_lean (vessel);

-- Create layer phase1 tables
CREATE TABLE marine_mh370.phase1
(
    path       text,
    name       text,
    md5        uuid,
    file_size  bigint,
    geom       geometry(Geometry, 4326),
    bundle     text,
    bext       text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    ext        text,
    tile       text,
    geom_id    bigint,
    uri        text,
    vessel     text
);

GRANT ALL ON TABLE marine_mh370.phase1 TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.phase1 TO mh370_api;

CREATE TABLE marine_mh370.phase1_adjust
(
    tid  serial
        constraint phase1_adjust_pkey
            primary key,
    geom geometry(Polygon, 4326),
    id   integer
);

GRANT ALL ON TABLE marine_mh370.phase1_adjust TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.phase1_adjust TO mh370_api;

CREATE INDEX sidx_phase1_adjust_geom
    ON marine_mh370.phase1_adjust using gist (geom);

CREATE TABLE marine_mh370.phase1_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.phase1_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.phase1_bundle TO mh370_api;

CREATE TABLE marine_mh370.phase1_geoms
(
    geom geometry(Geometry, 4326),
    id   serial
);

GRANT ALL ON TABLE marine_mh370.phase1_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.phase1_geoms TO mh370_api;

CREATE TABLE marine_mh370.phase1_lean
(
    path       text,
    name       text,
    md5        uuid,
    file_size  bigint,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.phase1_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.phase1_lean TO mh370_api;

-- Create layer platform_raw tables
CREATE TABLE marine_mh370.platform_raw
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone
);

GRANT ALL ON TABLE marine_mh370.platform_raw TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.platform_raw TO mh370_api;

CREATE TABLE marine_mh370.platform_raw_bundle
(
    bundle     text,
    bext       text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone
);

GRANT ALL ON TABLE marine_mh370.platform_raw_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.platform_raw_bundle TO mh370_api;

-- Create layer sas_sss tables
CREATE TABLE marine_mh370.sas_sss
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    bundle     text,
    ext        text,
    vessel     text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    uri        text,
    bext       text,
    geom       geometry(Geometry, 4326),
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.sas_sss TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sas_sss TO mh370_api;

CREATE TABLE marine_mh370.sas_sss_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.sas_sss_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sas_sss_bundle TO mh370_api;

CREATE TABLE marine_mh370.sas_sss_geoms
(
    geom geometry(Geometry, 4326),
    id   serial
);

GRANT ALL ON TABLE marine_mh370.sas_sss_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sas_sss_geoms TO mh370_api;

CREATE TABLE marine_mh370.sas_sss_lean
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.sas_sss_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sas_sss_lean TO mh370_api;

-- Create layer sbp tables
CREATE TABLE marine_mh370.sbp
(
    path       text not null
        constraint z_sbp_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    geom       geometry(Geometry, 4326),
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.sbp TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sbp TO mh370_api;

CREATE INDEX z_sbp_geom_idx
    ON marine_mh370.sbp using gist (geom);

CREATE TABLE marine_mh370.sbp_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.sbp_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sbp_bundle TO mh370_api;

CREATE INDEX sbp_bundle_bext_idx
    ON marine_mh370.sbp_bundle (bext);

CREATE INDEX sbp_bundle_bundle_idx
    ON marine_mh370.sbp_bundle (bundle);

CREATE INDEX sbp_bundle_file_size_idx
    ON marine_mh370.sbp_bundle (file_size);

CREATE INDEX sbp_bundle_geom_id_idx
    ON marine_mh370.sbp_bundle (geom_id);

CREATE INDEX sbp_bundle_time_end_idx
    ON marine_mh370.sbp_bundle (time_end);

CREATE INDEX sbp_bundle_time_start_idx
    ON marine_mh370.sbp_bundle (time_start);

CREATE INDEX sbp_bundle_vessel_idx
    ON marine_mh370.sbp_bundle (vessel);

CREATE SEQUENCE marine_mh370.z_sbp_geoms_id_seq;

CREATE TABLE marine_mh370.sbp_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('marine_mh370.z_sbp_geoms_id_seq'::regclass) not null
);

ALTER SEQUENCE marine_mh370.z_sbp_geoms_id_seq OWNED BY marine_mh370.sbp_geoms.id;

GRANT ALL ON TABLE marine_mh370.sbp_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sbp_geoms TO mh370_api;

CREATE INDEX z_sbp_geoms_geom_idx
    ON marine_mh370.sbp_geoms using gist (geom);

CREATE INDEX z_sbp_geoms_id_idx
    ON marine_mh370.sbp_geoms (id);

CREATE TABLE marine_mh370.sbp_lean
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.sbp_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sbp_lean TO mh370_api;

CREATE INDEX sbp_lean_bext_idx
    ON marine_mh370.sbp_lean (bext);

CREATE INDEX sbp_lean_bundle_idx
    ON marine_mh370.sbp_lean (bundle);

CREATE INDEX sbp_lean_ext_idx
    ON marine_mh370.sbp_lean (ext);

CREATE INDEX sbp_lean_file_size_idx
    ON marine_mh370.sbp_lean (file_size);

CREATE INDEX sbp_lean_geom_id_idx
    ON marine_mh370.sbp_lean (geom_id);

CREATE INDEX sbp_lean_name_idx
    ON marine_mh370.sbp_lean (name);

CREATE INDEX sbp_lean_time_end_idx
    ON marine_mh370.sbp_lean (time_end);

CREATE INDEX sbp_lean_time_start_idx
    ON marine_mh370.sbp_lean (time_start);

CREATE INDEX sbp_lean_vessel_idx
    ON marine_mh370.sbp_lean (vessel);

-- Create layer sidescan tables
CREATE TABLE marine_mh370.sidescan
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    geom       geometry(Geometry, 4326),
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.sidescan TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sidescan TO mh370_api;

CREATE TABLE marine_mh370.sidescan_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.sidescan_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sidescan_bundle TO mh370_api;

CREATE INDEX sidescan_bundle_bext_idx
    ON marine_mh370.sidescan_bundle (bext);

CREATE INDEX sidescan_bundle_bundle_idx
    ON marine_mh370.sidescan_bundle (bundle);

CREATE INDEX sidescan_bundle_file_size_idx
    ON marine_mh370.sidescan_bundle (file_size);

CREATE INDEX sidescan_bundle_geom_id_idx
    ON marine_mh370.sidescan_bundle (geom_id);

CREATE INDEX sidescan_bundle_time_end_idx
    ON marine_mh370.sidescan_bundle (time_end);

CREATE INDEX sidescan_bundle_time_start_idx
    ON marine_mh370.sidescan_bundle (time_start);

CREATE INDEX sidescan_bundle_vessel_idx
    ON marine_mh370.sidescan_bundle (vessel);

CREATE SEQUENCE marine_mh370.z_sidescan_geoms_id_seq;

CREATE TABLE marine_mh370.sidescan_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('marine_mh370.z_sidescan_geoms_id_seq'::regclass) not null
        constraint sidescan_geoms_pkey
            primary key
);

ALTER SEQUENCE marine_mh370.z_sidescan_geoms_id_seq OWNED BY marine_mh370.sidescan_geoms.id;

GRANT ALL ON TABLE marine_mh370.sidescan_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sidescan_geoms TO mh370_api;

CREATE INDEX sidescan_geoms_geom_idx
    ON marine_mh370.sidescan_geoms using gist (geom);

CREATE TABLE marine_mh370.sidescan_lean
(
    path       text not null
        constraint sidescan_lean_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.sidescan_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sidescan_lean TO mh370_api;

-- Create layer sidescan_raw tables
CREATE TABLE marine_mh370.sidescan_raw
(
    path       text not null
        constraint z_sidescan_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    geom       geometry(Geometry, 4326),
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.sidescan_raw TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sidescan_raw TO mh370_api;

CREATE INDEX z_sidescan_raw_bext_idx
    ON marine_mh370.sidescan_raw (bext);

CREATE INDEX z_sidescan_raw_bundle_idx
    ON marine_mh370.sidescan_raw (bundle);

CREATE INDEX z_sidescan_raw_geom_idx
    ON marine_mh370.sidescan_raw using gist (geom);

CREATE TABLE marine_mh370.sidescan_raw_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.sidescan_raw_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sidescan_raw_bundle TO mh370_api;

CREATE INDEX z_sidescan_raw_bundle_bext_idx
    ON marine_mh370.sidescan_raw_bundle (bext);

CREATE INDEX z_sidescan_raw_bundle_bundle_idx
    ON marine_mh370.sidescan_raw_bundle (bundle);

CREATE INDEX z_sidescan_raw_bundle_file_size_idx
    ON marine_mh370.sidescan_raw_bundle (file_size);

CREATE INDEX z_sidescan_raw_bundle_geom_id_idx
    ON marine_mh370.sidescan_raw_bundle (geom_id);

CREATE INDEX z_sidescan_raw_bundle_time_end_idx
    ON marine_mh370.sidescan_raw_bundle (time_end);

CREATE INDEX z_sidescan_raw_bundle_time_start_idx
    ON marine_mh370.sidescan_raw_bundle (time_start);

CREATE INDEX z_sidescan_raw_bundle_vessel_idx
    ON marine_mh370.sidescan_raw_bundle (vessel);

CREATE SEQUENCE marine_mh370.z_sidescan_raw_geoms_id_seq;

CREATE TABLE marine_mh370.sidescan_raw_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('marine_mh370.z_sidescan_raw_geoms_id_seq'::regclass) not null
        constraint z_sidescan_raw_geoms_pkey
            primary key
);

ALTER SEQUENCE marine_mh370.z_sidescan_raw_geoms_id_seq OWNED BY marine_mh370.sidescan_raw_geoms.id;

GRANT ALL ON TABLE marine_mh370.sidescan_raw_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sidescan_raw_geoms TO mh370_api;

CREATE INDEX z_sidescan_raw_geoms_geom_idx
    ON marine_mh370.sidescan_raw_geoms using gist (geom);

CREATE TABLE marine_mh370.sidescan_raw_lean
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.sidescan_raw_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sidescan_raw_lean TO mh370_api;

CREATE INDEX z_sidescan_raw_lean_bext_idx
    ON marine_mh370.sidescan_raw_lean (bext);

CREATE INDEX z_sidescan_raw_lean_bundle_idx
    ON marine_mh370.sidescan_raw_lean (bundle);

CREATE INDEX z_sidescan_raw_lean_ext_idx
    ON marine_mh370.sidescan_raw_lean (ext);

CREATE INDEX z_sidescan_raw_lean_file_size_idx
    ON marine_mh370.sidescan_raw_lean (file_size);

CREATE INDEX z_sidescan_raw_lean_geom_id_idx
    ON marine_mh370.sidescan_raw_lean (geom_id);

CREATE INDEX z_sidescan_raw_lean_name_idx
    ON marine_mh370.sidescan_raw_lean (name);

CREATE INDEX z_sidescan_raw_lean_time_end_idx
    ON marine_mh370.sidescan_raw_lean (time_end);

CREATE INDEX z_sidescan_raw_lean_time_start_idx
    ON marine_mh370.sidescan_raw_lean (time_start);

CREATE INDEX z_sidescan_raw_lean_vessel_idx
    ON marine_mh370.sidescan_raw_lean (vessel);

-- Create layer sniffer tables
CREATE TABLE marine_mh370.sniffer
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    geom       geometry(Geometry, 4326),
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.sniffer TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sniffer TO mh370_api;

CREATE TABLE marine_mh370.sniffer_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.sniffer_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sniffer_bundle TO mh370_api;

CREATE INDEX z_sniffer_bundle_bext_idx
    ON marine_mh370.sniffer_bundle (bext);

CREATE INDEX z_sniffer_bundle_bundle_idx
    ON marine_mh370.sniffer_bundle (bundle);

CREATE INDEX z_sniffer_bundle_file_size_idx
    ON marine_mh370.sniffer_bundle (file_size);

CREATE INDEX z_sniffer_bundle_geom_id_idx
    ON marine_mh370.sniffer_bundle (geom_id);

CREATE INDEX z_sniffer_bundle_time_end_idx
    ON marine_mh370.sniffer_bundle (time_end);

CREATE INDEX z_sniffer_bundle_time_start_idx
    ON marine_mh370.sniffer_bundle (time_start);

CREATE INDEX z_sniffer_bundle_vessel_idx
    ON marine_mh370.sniffer_bundle (vessel);

CREATE SEQUENCE marine_mh370.z_sniffer_geoms_id_seq;

CREATE TABLE marine_mh370.sniffer_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('marine_mh370.z_sniffer_geoms_id_seq'::regclass) not null
);

ALTER SEQUENCE marine_mh370.z_sniffer_geoms_id_seq OWNED BY marine_mh370.sniffer_geoms.id;

GRANT ALL ON TABLE marine_mh370.sniffer_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sniffer_geoms TO mh370_api;

CREATE TABLE marine_mh370.sniffer_lean
(
    path       text not null
        constraint z_sniffer_lean_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.sniffer_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.sniffer_lean TO mh370_api;

CREATE INDEX z_sniffer_lean_bext_idx
    ON marine_mh370.sniffer_lean (bext);

CREATE INDEX z_sniffer_lean_bundle_idx
    ON marine_mh370.sniffer_lean (bundle);

CREATE INDEX z_sniffer_lean_ext_idx
    ON marine_mh370.sniffer_lean (ext);

CREATE INDEX z_sniffer_lean_file_size_idx
    ON marine_mh370.sniffer_lean (file_size);

CREATE INDEX z_sniffer_lean_geom_id_idx
    ON marine_mh370.sniffer_lean (geom_id);

CREATE INDEX z_sniffer_lean_name_idx
    ON marine_mh370.sniffer_lean (name);

CREATE INDEX z_sniffer_lean_time_end_idx
    ON marine_mh370.sniffer_lean (time_end);

CREATE INDEX z_sniffer_lean_time_start_idx
    ON marine_mh370.sniffer_lean (time_start);

CREATE INDEX z_sniffer_lean_vessel_idx
    ON marine_mh370.sniffer_lean (vessel);

-- Create layer svp tables
CREATE TABLE marine_mh370.svp
(
    path       text not null
        constraint z_svp_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    geom       geometry(Geometry, 4326),
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.svp TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.svp TO mh370_api;

CREATE TABLE marine_mh370.svp_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.svp_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.svp_bundle TO mh370_api;

CREATE INDEX z_svp_bundle_bext_idx
    ON marine_mh370.svp_bundle (bext);

CREATE INDEX z_svp_bundle_bundle_idx
    ON marine_mh370.svp_bundle (bundle);

CREATE INDEX z_svp_bundle_file_size_idx
    ON marine_mh370.svp_bundle (file_size);

CREATE INDEX z_svp_bundle_geom_id_idx
    ON marine_mh370.svp_bundle (geom_id);

CREATE INDEX z_svp_bundle_time_end_idx
    ON marine_mh370.svp_bundle (time_end);

CREATE INDEX z_svp_bundle_time_start_idx
    ON marine_mh370.svp_bundle (time_start);

CREATE INDEX z_svp_bundle_vessel_idx
    ON marine_mh370.svp_bundle (vessel);

CREATE SEQUENCE marine_mh370.z_svp_geoms_id_seq;

CREATE TABLE marine_mh370.svp_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('marine_mh370.z_svp_geoms_id_seq'::regclass) not null
);

ALTER SEQUENCE marine_mh370.z_svp_geoms_id_seq OWNED BY marine_mh370.svp_geoms.id;

GRANT ALL ON TABLE marine_mh370.svp_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.svp_geoms TO mh370_api;

CREATE TABLE marine_mh370.svp_lean
(
    path       text not null
        constraint z_svp_lean_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.svp_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.svp_lean TO mh370_api;

CREATE INDEX z_svp_lean_bext_idx
    ON marine_mh370.svp_lean (bext);

CREATE INDEX z_svp_lean_bundle_idx
    ON marine_mh370.svp_lean (bundle);

CREATE INDEX z_svp_lean_ext_idx
    ON marine_mh370.svp_lean (ext);

CREATE INDEX z_svp_lean_file_size_idx
    ON marine_mh370.svp_lean (file_size);

CREATE INDEX z_svp_lean_geom_id_idx
    ON marine_mh370.svp_lean (geom_id);

CREATE INDEX z_svp_lean_name_idx
    ON marine_mh370.svp_lean (name);

CREATE INDEX z_svp_lean_time_end_idx
    ON marine_mh370.svp_lean (time_end);

CREATE INDEX z_svp_lean_time_start_idx
    ON marine_mh370.svp_lean (time_start);

CREATE INDEX z_svp_lean_vessel_idx
    ON marine_mh370.svp_lean (vessel);

-- Create layer tides tables
CREATE TABLE marine_mh370.tides
(
    path       text not null
        constraint z_tides_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone
);

GRANT ALL ON TABLE marine_mh370.tides TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.tides TO mh370_api;

CREATE TABLE marine_mh370.tides_bundle
(
    bundle     text,
    bext       text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone
);

GRANT ALL ON TABLE marine_mh370.tides_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.tides_bundle TO mh370_api;

-- Create layer vis_summary tables
CREATE TABLE marine_mh370.vis_summary
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    geom       geometry(Geometry, 4326),
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.vis_summary TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.vis_summary TO mh370_api;

CREATE TABLE marine_mh370.vis_summary_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.vis_summary_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.vis_summary_bundle TO mh370_api;

CREATE TABLE marine_mh370.vis_summary_geoms
(
    geom geometry(Geometry, 4326),
    id   serial
);

GRANT ALL ON TABLE marine_mh370.vis_summary_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.vis_summary_geoms TO mh370_api;

CREATE TABLE marine_mh370.vis_summary_lean
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.vis_summary_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.vis_summary_lean TO mh370_api;

-- Create layer wc tables
CREATE TABLE marine_mh370.wc
(
    path       text not null
        constraint z_wc_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    geom       geometry(Geometry, 4326),
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.wc TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.wc TO mh370_api;

CREATE TABLE marine_mh370.wc_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.wc_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.wc_bundle TO mh370_api;

CREATE INDEX z_wc_bundle_bext_idx
    ON marine_mh370.wc_bundle (bext);

CREATE INDEX z_wc_bundle_bundle_idx
    ON marine_mh370.wc_bundle (bundle);

CREATE INDEX z_wc_bundle_file_size_idx
    ON marine_mh370.wc_bundle (file_size);

CREATE INDEX z_wc_bundle_geom_id_idx
    ON marine_mh370.wc_bundle (geom_id);

CREATE INDEX z_wc_bundle_time_end_idx
    ON marine_mh370.wc_bundle (time_end);

CREATE INDEX z_wc_bundle_time_start_idx
    ON marine_mh370.wc_bundle (time_start);

CREATE INDEX z_wc_bundle_vessel_idx
    ON marine_mh370.wc_bundle (vessel);

CREATE SEQUENCE marine_mh370.z_wc_geoms_id_seq;

CREATE TABLE marine_mh370.wc_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('marine_mh370.z_wc_geoms_id_seq'::regclass) not null
        constraint z_wc_geoms_pkey
            primary key
);

ALTER SEQUENCE marine_mh370.z_wc_geoms_id_seq OWNED BY marine_mh370.wc_geoms.id;

GRANT ALL ON TABLE marine_mh370.wc_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.wc_geoms TO mh370_api;

CREATE INDEX z_wc_geoms_geom_idx
    ON marine_mh370.wc_geoms using gist (geom);

CREATE TABLE marine_mh370.wc_lean
(
    path       text not null
        constraint z_wc_lean_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.wc_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.wc_lean TO mh370_api;

-- Create layer weather tables
CREATE TABLE marine_mh370.weather
(
    path       text not null
        constraint weather_pkey
            primary key,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    vessel     text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    geom       geometry(Geometry, 4326),
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.weather TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.weather TO mh370_api;

CREATE INDEX weather_bext_idx
    ON marine_mh370.weather (bext);

CREATE INDEX weather_bundle_idx
    ON marine_mh370.weather (bundle);

CREATE INDEX weather_ext_idx
    ON marine_mh370.weather (ext);

CREATE INDEX weather_file_size_idx
    ON marine_mh370.weather (file_size);

CREATE INDEX weather_geom_id_idx
    ON marine_mh370.weather (geom_id);

CREATE INDEX weather_name_idx
    ON marine_mh370.weather (name);

CREATE INDEX weather_time_end_idx
    ON marine_mh370.weather (time_end);

CREATE INDEX weather_time_start_idx
    ON marine_mh370.weather (time_start);

CREATE INDEX weather_vessel_idx
    ON marine_mh370.weather (vessel);

CREATE TABLE marine_mh370.weather_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.weather_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.weather_bundle TO mh370_api;

CREATE INDEX weather_bundle_bext_idx
    ON marine_mh370.weather_bundle (bext);

CREATE INDEX weather_bundle_bundle_idx
    ON marine_mh370.weather_bundle (bundle);

CREATE INDEX weather_bundle_file_size_idx
    ON marine_mh370.weather_bundle (file_size);

CREATE INDEX weather_bundle_geom_id_idx
    ON marine_mh370.weather_bundle (geom_id);

CREATE INDEX weather_bundle_time_end_idx
    ON marine_mh370.weather_bundle (time_end);

CREATE INDEX weather_bundle_time_start_idx
    ON marine_mh370.weather_bundle (time_start);

CREATE INDEX weather_bundle_vessel_idx
    ON marine_mh370.weather_bundle (vessel);

CREATE TABLE marine_mh370.weather_geoms
(
    geom geometry(Geometry, 4326),
    id   serial
);

GRANT ALL ON TABLE marine_mh370.weather_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.weather_geoms TO mh370_api;

CREATE TABLE marine_mh370.weather_lean
(
    path       text,
    name       text,
    md5        uuid,
    file_size  numeric,
    ext        text,
    bundle     text,
    bext       text,
    uri        text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE marine_mh370.weather_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE marine_mh370.weather_lean TO mh370_api;
