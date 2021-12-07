-- Create ga_marine schema
CREATE SCHEMA ga_marine;

-- Create the API user
CREATE USER marine_api;
ALTER USER marine_api with encrypted password '';
GRANT USAGE ON SCHEMA ga_marine TO marine_api;

-- Create layer backscatter tables
CREATE TABLE ga_marine.backscatter
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

GRANT ALL ON TABLE ga_marine.backscatter TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.backscatter TO marine_api;

CREATE TABLE ga_marine.backscatter_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.backscatter_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.backscatter_bundle TO marine_api;

CREATE INDEX backscatter_bundle_bext_idx
    ON ga_marine.backscatter_bundle (bext);

CREATE INDEX backscatter_bundle_bundle_idx
    ON ga_marine.backscatter_bundle (bundle);

CREATE INDEX backscatter_bundle_file_size_idx
    ON ga_marine.backscatter_bundle (file_size);

CREATE INDEX backscatter_bundle_geom_id_idx
    ON ga_marine.backscatter_bundle (geom_id);

CREATE INDEX backscatter_bundle_time_end_idx
    ON ga_marine.backscatter_bundle (time_end);

CREATE INDEX backscatter_bundle_time_start_idx
    ON ga_marine.backscatter_bundle (time_start);

CREATE INDEX backscatter_bundle_vessel_idx
    ON ga_marine.backscatter_bundle (vessel);

CREATE SEQUENCE ga_marine.z_backscatter_geoms_id_seq;

CREATE TABLE ga_marine.backscatter_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('ga_marine.z_backscatter_geoms_id_seq'::regclass) not null
        constraint backscatter_geoms_pkey
            primary key
);

ALTER SEQUENCE ga_marine.z_backscatter_geoms_id_seq OWNED BY ga_marine.backscatter_geoms.id;

GRANT ALL ON TABLE ga_marine.backscatter_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.backscatter_geoms TO marine_api;

CREATE INDEX backscatter_geoms_geom_idx
    ON ga_marine.backscatter_geoms using gist (geom);

CREATE INDEX backscatter_geoms_id_idx
    ON ga_marine.backscatter_geoms (id);

CREATE TABLE ga_marine.backscatter_lean
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

GRANT ALL ON TABLE ga_marine.backscatter_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.backscatter_lean TO marine_api;

CREATE INDEX backscatter_lean_bext_idx
    ON ga_marine.backscatter_lean (bext);

CREATE INDEX backscatter_lean_bundle_idx
    ON ga_marine.backscatter_lean (bundle);

CREATE INDEX backscatter_lean_ext_idx
    ON ga_marine.backscatter_lean (ext);

CREATE INDEX backscatter_lean_file_size_idx
    ON ga_marine.backscatter_lean (file_size);

CREATE INDEX backscatter_lean_geom_id_idx
    ON ga_marine.backscatter_lean (geom_id);

CREATE INDEX backscatter_lean_name_idx
    ON ga_marine.backscatter_lean (name);

CREATE INDEX backscatter_lean_time_end_idx
    ON ga_marine.backscatter_lean (time_end);

CREATE INDEX backscatter_lean_time_start_idx
    ON ga_marine.backscatter_lean (time_start);

CREATE INDEX backscatter_lean_vessel_idx
    ON ga_marine.backscatter_lean (vessel);

-- Create layer bathymetry tables
CREATE TABLE ga_marine.bathymetry
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

GRANT ALL ON TABLE ga_marine.bathymetry TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.bathymetry TO marine_api;

CREATE TABLE ga_marine.bathymetry_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.bathymetry_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.bathymetry_bundle TO marine_api;

CREATE INDEX bathymetry_bundle_bext_idx
    ON ga_marine.bathymetry_bundle (bext);

CREATE INDEX bathymetry_bundle_bundle_idx
    ON ga_marine.bathymetry_bundle (bundle);

CREATE INDEX bathymetry_bundle_file_size_idx
    ON ga_marine.bathymetry_bundle (file_size);

CREATE INDEX bathymetry_bundle_geom_id_idx
    ON ga_marine.bathymetry_bundle (geom_id);

CREATE INDEX bathymetry_bundle_time_end_idx
    ON ga_marine.bathymetry_bundle (time_end);

CREATE INDEX bathymetry_bundle_time_start_idx
    ON ga_marine.bathymetry_bundle (time_start);

CREATE INDEX bathymetry_bundle_vessel_idx
    ON ga_marine.bathymetry_bundle (vessel);

CREATE SEQUENCE ga_marine.z_bathymetry_geoms_id_seq;

CREATE TABLE ga_marine.bathymetry_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('ga_marine.z_bathymetry_geoms_id_seq'::regclass) not null
);

ALTER SEQUENCE ga_marine.z_bathymetry_geoms_id_seq OWNED BY ga_marine.bathymetry_geoms.id;

GRANT ALL ON TABLE ga_marine.bathymetry_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.bathymetry_geoms TO marine_api;

CREATE INDEX bathymetry_geoms_geom_idx
    ON ga_marine.bathymetry_geoms using gist (geom);

CREATE INDEX bathymetry_geoms_id_idx
    ON ga_marine.bathymetry_geoms (id);

CREATE INDEX z_bathymetry_geoms_geom_idx
    ON ga_marine.bathymetry_geoms using gist (geom);

CREATE TABLE ga_marine.bathymetry_lean
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

GRANT ALL ON TABLE ga_marine.bathymetry_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.bathymetry_lean TO marine_api;

CREATE INDEX bathymetry_lean_bext_idx
    ON ga_marine.bathymetry_lean (bext);

CREATE INDEX bathymetry_lean_bundle_idx
    ON ga_marine.bathymetry_lean (bundle);

CREATE INDEX bathymetry_lean_ext_idx
    ON ga_marine.bathymetry_lean (ext);

CREATE INDEX bathymetry_lean_file_size_idx
    ON ga_marine.bathymetry_lean (file_size);

CREATE INDEX bathymetry_lean_geom_id_idx
    ON ga_marine.bathymetry_lean (geom_id);

CREATE INDEX bathymetry_lean_name_idx
    ON ga_marine.bathymetry_lean (name);

CREATE INDEX bathymetry_lean_time_end_idx
    ON ga_marine.bathymetry_lean (time_end);

CREATE INDEX bathymetry_lean_time_start_idx
    ON ga_marine.bathymetry_lean (time_start);

CREATE INDEX bathymetry_lean_vessel_idx
    ON ga_marine.bathymetry_lean (vessel);

-- Create layer camera tables
CREATE TABLE ga_marine.camera
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

GRANT ALL ON TABLE ga_marine.camera TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.camera TO marine_api;

CREATE TABLE ga_marine.camera_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.camera_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.camera_bundle TO marine_api;

CREATE INDEX camera_bundle_bext_idx
    ON ga_marine.camera_bundle (bext);

CREATE INDEX camera_bundle_bundle_idx
    ON ga_marine.camera_bundle (bundle);

CREATE INDEX camera_bundle_file_size_idx
    ON ga_marine.camera_bundle (file_size);

CREATE INDEX camera_bundle_geom_id_idx
    ON ga_marine.camera_bundle (geom_id);

CREATE INDEX camera_bundle_time_end_idx
    ON ga_marine.camera_bundle (time_end);

CREATE INDEX camera_bundle_time_start_idx
    ON ga_marine.camera_bundle (time_start);

CREATE INDEX camera_bundle_vessel_idx
    ON ga_marine.camera_bundle (vessel);

CREATE SEQUENCE ga_marine.camera_geoms_id_seq1;

CREATE TABLE ga_marine.camera_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('ga_marine.camera_geoms_id_seq1'::regclass) not null
);

ALTER SEQUENCE ga_marine.camera_geoms_id_seq1 OWNED BY ga_marine.camera_geoms.id;

GRANT ALL ON TABLE ga_marine.camera_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.camera_geoms TO marine_api;

CREATE INDEX camera_geoms_geom_idx
    ON ga_marine.camera_geoms using gist (geom);

CREATE INDEX camera_geoms_id_idx
    ON ga_marine.camera_geoms (id);

CREATE TABLE ga_marine.camera_lean
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

GRANT ALL ON TABLE ga_marine.camera_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.camera_lean TO marine_api;

CREATE INDEX camera_lean_bext_idx
    ON ga_marine.camera_lean (bext);

CREATE INDEX camera_lean_bundle_idx
    ON ga_marine.camera_lean (bundle);

-- Create layer final_processed tables
CREATE TABLE ga_marine.final_processed
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

GRANT ALL ON TABLE ga_marine.final_processed TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.final_processed TO marine_api;

CREATE INDEX final_processed_geom_idx
    ON ga_marine.final_processed using gist (geom);

CREATE INDEX z_final_processed_bext_idx
    ON ga_marine.final_processed (bext);

CREATE INDEX z_final_processed_bundle_idx
    ON ga_marine.final_processed (bundle);

CREATE SEQUENCE ga_marine.fpgd_id_seq;

CREATE TABLE ga_marine.final_processed_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('ga_marine.fpgd_id_seq'::regclass) not null
);

ALTER SEQUENCE ga_marine.fpgd_id_seq OWNED BY ga_marine.final_processed_geoms.id;

GRANT ALL ON TABLE ga_marine.final_processed_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.final_processed_geoms TO marine_api;

CREATE TABLE ga_marine.final_processed_lean
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

GRANT ALL ON TABLE ga_marine.final_processed_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.final_processed_lean TO marine_api;

-- Create layer heave tables
CREATE TABLE ga_marine.heave
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

GRANT ALL ON TABLE ga_marine.heave TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.heave TO marine_api;

CREATE TABLE ga_marine.heave_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.heave_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.heave_bundle TO marine_api;

CREATE INDEX heave_bundle_bext_idx
    ON ga_marine.heave_bundle (bext);

CREATE INDEX heave_bundle_bundle_idx
    ON ga_marine.heave_bundle (bundle);

CREATE INDEX heave_bundle_file_size_idx
    ON ga_marine.heave_bundle (file_size);

CREATE INDEX heave_bundle_geom_id_idx
    ON ga_marine.heave_bundle (geom_id);

CREATE INDEX heave_bundle_time_end_idx
    ON ga_marine.heave_bundle (time_end);

CREATE INDEX heave_bundle_time_start_idx
    ON ga_marine.heave_bundle (time_start);

CREATE INDEX heave_bundle_vessel_idx
    ON ga_marine.heave_bundle (vessel);

CREATE TABLE ga_marine.heave_geoms
(
    geom geometry(Geometry, 4326),
    id   serial
);

GRANT ALL ON TABLE ga_marine.heave_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.heave_geoms TO marine_api;

CREATE INDEX heave_geoms_geom_idx
    ON ga_marine.heave_geoms using gist (geom);

CREATE TABLE ga_marine.heave_lean
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

GRANT ALL ON TABLE ga_marine.heave_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.heave_lean TO marine_api;

CREATE INDEX heave_lean_bext_idx
    ON ga_marine.heave_lean (bext);

CREATE INDEX heave_lean_bundle_idx
    ON ga_marine.heave_lean (bundle);

CREATE INDEX heave_lean_ext_idx
    ON ga_marine.heave_lean (ext);

CREATE INDEX heave_lean_file_size_idx
    ON ga_marine.heave_lean (file_size);

CREATE INDEX heave_lean_geom_id_idx
    ON ga_marine.heave_lean (geom_id);

CREATE INDEX heave_lean_name_idx
    ON ga_marine.heave_lean (name);

CREATE INDEX heave_lean_time_end_idx
    ON ga_marine.heave_lean (time_end);

CREATE INDEX heave_lean_time_start_idx
    ON ga_marine.heave_lean (time_start);

CREATE INDEX heave_lean_vessel_idx
    ON ga_marine.heave_lean (vessel);

-- Create layer hillshade tables
CREATE TABLE ga_marine.hillshade
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

GRANT ALL ON TABLE ga_marine.hillshade TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.hillshade TO marine_api;

CREATE TABLE ga_marine.hillshade_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.hillshade_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.hillshade_bundle TO marine_api;

CREATE INDEX hillshade_bundle_bext_idx
    ON ga_marine.hillshade_bundle (bext);

CREATE INDEX hillshade_bundle_bundle_idx
    ON ga_marine.hillshade_bundle (bundle);

CREATE INDEX hillshade_bundle_file_size_idx
    ON ga_marine.hillshade_bundle (file_size);

CREATE INDEX hillshade_bundle_geom_id_idx
    ON ga_marine.hillshade_bundle (geom_id);

CREATE INDEX hillshade_bundle_time_end_idx
    ON ga_marine.hillshade_bundle (time_end);

CREATE INDEX hillshade_bundle_time_start_idx
    ON ga_marine.hillshade_bundle (time_start);

CREATE INDEX hillshade_bundle_vessel_idx
    ON ga_marine.hillshade_bundle (vessel);

CREATE SEQUENCE ga_marine.z_hillshade_geoms_id_seq;

CREATE TABLE ga_marine.hillshade_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('ga_marine.z_hillshade_geoms_id_seq'::regclass) not null
);

ALTER SEQUENCE ga_marine.z_hillshade_geoms_id_seq OWNED BY ga_marine.hillshade_geoms.id;

GRANT ALL ON TABLE ga_marine.hillshade_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.hillshade_geoms TO marine_api;

CREATE INDEX z_hillshade_geoms_geom_idx
    ON ga_marine.hillshade_geoms using gist (geom);

CREATE TABLE ga_marine.hillshade_lean
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

GRANT ALL ON TABLE ga_marine.hillshade_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.hillshade_lean TO marine_api;

CREATE INDEX z_hillshade_lean_bext_idx
    ON ga_marine.hillshade_lean (bext);

CREATE INDEX z_hillshade_lean_bundle_idx
    ON ga_marine.hillshade_lean (bundle);

CREATE INDEX z_hillshade_lean_ext_idx
    ON ga_marine.hillshade_lean (ext);

CREATE INDEX z_hillshade_lean_file_size_idx
    ON ga_marine.hillshade_lean (file_size);

CREATE INDEX z_hillshade_lean_geom_id_idx
    ON ga_marine.hillshade_lean (geom_id);

CREATE INDEX z_hillshade_lean_name_idx
    ON ga_marine.hillshade_lean (name);

CREATE INDEX z_hillshade_lean_time_end_idx
    ON ga_marine.hillshade_lean (time_end);

CREATE INDEX z_hillshade_lean_time_start_idx
    ON ga_marine.hillshade_lean (time_start);

CREATE INDEX z_hillshade_lean_vessel_idx
    ON ga_marine.hillshade_lean (vessel);

-- Create layer mbes_raw tables
CREATE TABLE ga_marine.mbes_raw
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

GRANT ALL ON TABLE ga_marine.mbes_raw TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.mbes_raw TO marine_api;

CREATE TABLE ga_marine.mbes_raw_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.mbes_raw_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.mbes_raw_bundle TO marine_api;

CREATE INDEX z_mbes_raw_bundle_bext_idx
    ON ga_marine.mbes_raw_bundle (bext);

CREATE INDEX z_mbes_raw_bundle_bundle_idx
    ON ga_marine.mbes_raw_bundle (bundle);

CREATE INDEX z_mbes_raw_bundle_file_size_idx
    ON ga_marine.mbes_raw_bundle (file_size);

CREATE INDEX z_mbes_raw_bundle_geom_id_idx
    ON ga_marine.mbes_raw_bundle (geom_id);

CREATE INDEX z_mbes_raw_bundle_time_end_idx
    ON ga_marine.mbes_raw_bundle (time_end);

CREATE INDEX z_mbes_raw_bundle_time_start_idx
    ON ga_marine.mbes_raw_bundle (time_start);

CREATE INDEX z_mbes_raw_bundle_vessel_idx
    ON ga_marine.mbes_raw_bundle (vessel);

CREATE SEQUENCE ga_marine.z_mbes_raw_geoms_id_seq;

CREATE TABLE ga_marine.mbes_raw_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('ga_marine.z_mbes_raw_geoms_id_seq'::regclass) not null
);

ALTER SEQUENCE ga_marine.z_mbes_raw_geoms_id_seq OWNED BY ga_marine.mbes_raw_geoms.id;

GRANT ALL ON TABLE ga_marine.mbes_raw_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.mbes_raw_geoms TO marine_api;

CREATE TABLE ga_marine.mbes_raw_lean
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

GRANT ALL ON TABLE ga_marine.mbes_raw_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.mbes_raw_lean TO marine_api;

CREATE INDEX z_mbes_raw_lean_bext_idx
    ON ga_marine.mbes_raw_lean (bext);

CREATE INDEX z_mbes_raw_lean_bundle_idx
    ON ga_marine.mbes_raw_lean (bundle);

CREATE INDEX z_mbes_raw_lean_ext_idx
    ON ga_marine.mbes_raw_lean (ext);

CREATE INDEX z_mbes_raw_lean_file_size_idx
    ON ga_marine.mbes_raw_lean (file_size);

CREATE INDEX z_mbes_raw_lean_geom_id_idx
    ON ga_marine.mbes_raw_lean (geom_id);

CREATE INDEX z_mbes_raw_lean_name_idx
    ON ga_marine.mbes_raw_lean (name);

CREATE INDEX z_mbes_raw_lean_time_end_idx
    ON ga_marine.mbes_raw_lean (time_end);

CREATE INDEX z_mbes_raw_lean_time_start_idx
    ON ga_marine.mbes_raw_lean (time_start);

CREATE INDEX z_mbes_raw_lean_vessel_idx
    ON ga_marine.mbes_raw_lean (vessel);

-- Create layer nav tables
CREATE TABLE ga_marine.nav
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

GRANT ALL ON TABLE ga_marine.nav TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.nav TO marine_api;

CREATE INDEX z_nav_geom_idx1
    ON ga_marine.nav using gist (geom);

CREATE TABLE ga_marine.nav_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.nav_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.nav_bundle TO marine_api;

CREATE INDEX z_nav_bundle_bext_idx2
    ON ga_marine.nav_bundle (bext);

CREATE INDEX z_nav_bundle_bundle_idx2
    ON ga_marine.nav_bundle (bundle);

CREATE INDEX z_nav_bundle_file_size_idx2
    ON ga_marine.nav_bundle (file_size);

CREATE INDEX z_nav_bundle_geom_id_idx2
    ON ga_marine.nav_bundle (geom_id);

CREATE INDEX z_nav_bundle_time_end_idx2
    ON ga_marine.nav_bundle (time_end);

CREATE INDEX z_nav_bundle_time_start_idx2
    ON ga_marine.nav_bundle (time_start);

CREATE INDEX z_nav_bundle_vessel_idx2
    ON ga_marine.nav_bundle (vessel);

CREATE SEQUENCE ga_marine.z_nav_geoms_id_seq2;

CREATE TABLE ga_marine.nav_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('ga_marine.z_nav_geoms_id_seq2'::regclass) not null
);

ALTER SEQUENCE ga_marine.z_nav_geoms_id_seq2 OWNED BY ga_marine.nav_geoms.id;

GRANT ALL ON TABLE ga_marine.nav_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.nav_geoms TO marine_api;

CREATE INDEX z_nav_geoms_geom_idx1
    ON ga_marine.nav_geoms using gist (geom);

CREATE TABLE ga_marine.nav_lean
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

GRANT ALL ON TABLE ga_marine.nav_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.nav_lean TO marine_api;

CREATE INDEX z_nav_lean_bext_idx2
    ON ga_marine.nav_lean (bext);

CREATE INDEX z_nav_lean_bundle_idx2
    ON ga_marine.nav_lean (bundle);

CREATE INDEX z_nav_lean_ext_idx2
    ON ga_marine.nav_lean (ext);

CREATE INDEX z_nav_lean_file_size_idx2
    ON ga_marine.nav_lean (file_size);

CREATE INDEX z_nav_lean_geom_id_idx2
    ON ga_marine.nav_lean (geom_id);

CREATE INDEX z_nav_lean_name_idx2
    ON ga_marine.nav_lean (name);

CREATE INDEX z_nav_lean_time_end_idx2
    ON ga_marine.nav_lean (time_end);

CREATE INDEX z_nav_lean_time_start_idx2
    ON ga_marine.nav_lean (time_start);

CREATE INDEX z_nav_lean_vessel_idx2
    ON ga_marine.nav_lean (vessel);

-- Create layer phase1 tables
CREATE TABLE ga_marine.phase1
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

GRANT ALL ON TABLE ga_marine.phase1 TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.phase1 TO marine_api;

CREATE TABLE ga_marine.phase1_adjust
(
    tid  serial
        constraint phase1_adjust_pkey
            primary key,
    geom geometry(Polygon, 4326),
    id   integer
);

GRANT ALL ON TABLE ga_marine.phase1_adjust TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.phase1_adjust TO marine_api;

CREATE INDEX sidx_phase1_adjust_geom
    ON ga_marine.phase1_adjust using gist (geom);

CREATE TABLE ga_marine.phase1_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.phase1_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.phase1_bundle TO marine_api;

CREATE TABLE ga_marine.phase1_geoms
(
    geom geometry(Geometry, 4326),
    id   serial
);

GRANT ALL ON TABLE ga_marine.phase1_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.phase1_geoms TO marine_api;

CREATE TABLE ga_marine.phase1_lean
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

GRANT ALL ON TABLE ga_marine.phase1_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.phase1_lean TO marine_api;

-- Create layer platform_raw tables
CREATE TABLE ga_marine.platform_raw
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

GRANT ALL ON TABLE ga_marine.platform_raw TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.platform_raw TO marine_api;

CREATE TABLE ga_marine.platform_raw_bundle
(
    bundle     text,
    bext       text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone
);

GRANT ALL ON TABLE ga_marine.platform_raw_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.platform_raw_bundle TO marine_api;

-- Create layer sas_sss tables
CREATE TABLE ga_marine.sas_sss
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

GRANT ALL ON TABLE ga_marine.sas_sss TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sas_sss TO marine_api;

CREATE TABLE ga_marine.sas_sss_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.sas_sss_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sas_sss_bundle TO marine_api;

CREATE TABLE ga_marine.sas_sss_geoms
(
    geom geometry(Geometry, 4326),
    id   serial
);

GRANT ALL ON TABLE ga_marine.sas_sss_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sas_sss_geoms TO marine_api;

CREATE TABLE ga_marine.sas_sss_lean
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

GRANT ALL ON TABLE ga_marine.sas_sss_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sas_sss_lean TO marine_api;

-- Create layer sbp tables
CREATE TABLE ga_marine.sbp
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

GRANT ALL ON TABLE ga_marine.sbp TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sbp TO marine_api;

CREATE INDEX z_sbp_geom_idx
    ON ga_marine.sbp using gist (geom);

CREATE TABLE ga_marine.sbp_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.sbp_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sbp_bundle TO marine_api;

CREATE INDEX sbp_bundle_bext_idx
    ON ga_marine.sbp_bundle (bext);

CREATE INDEX sbp_bundle_bundle_idx
    ON ga_marine.sbp_bundle (bundle);

CREATE INDEX sbp_bundle_file_size_idx
    ON ga_marine.sbp_bundle (file_size);

CREATE INDEX sbp_bundle_geom_id_idx
    ON ga_marine.sbp_bundle (geom_id);

CREATE INDEX sbp_bundle_time_end_idx
    ON ga_marine.sbp_bundle (time_end);

CREATE INDEX sbp_bundle_time_start_idx
    ON ga_marine.sbp_bundle (time_start);

CREATE INDEX sbp_bundle_vessel_idx
    ON ga_marine.sbp_bundle (vessel);

CREATE SEQUENCE ga_marine.z_sbp_geoms_id_seq;

CREATE TABLE ga_marine.sbp_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('ga_marine.z_sbp_geoms_id_seq'::regclass) not null
);

ALTER SEQUENCE ga_marine.z_sbp_geoms_id_seq OWNED BY ga_marine.sbp_geoms.id;

GRANT ALL ON TABLE ga_marine.sbp_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sbp_geoms TO marine_api;

CREATE INDEX z_sbp_geoms_geom_idx
    ON ga_marine.sbp_geoms using gist (geom);

CREATE INDEX z_sbp_geoms_id_idx
    ON ga_marine.sbp_geoms (id);

CREATE TABLE ga_marine.sbp_lean
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

GRANT ALL ON TABLE ga_marine.sbp_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sbp_lean TO marine_api;

CREATE INDEX sbp_lean_bext_idx
    ON ga_marine.sbp_lean (bext);

CREATE INDEX sbp_lean_bundle_idx
    ON ga_marine.sbp_lean (bundle);

CREATE INDEX sbp_lean_ext_idx
    ON ga_marine.sbp_lean (ext);

CREATE INDEX sbp_lean_file_size_idx
    ON ga_marine.sbp_lean (file_size);

CREATE INDEX sbp_lean_geom_id_idx
    ON ga_marine.sbp_lean (geom_id);

CREATE INDEX sbp_lean_name_idx
    ON ga_marine.sbp_lean (name);

CREATE INDEX sbp_lean_time_end_idx
    ON ga_marine.sbp_lean (time_end);

CREATE INDEX sbp_lean_time_start_idx
    ON ga_marine.sbp_lean (time_start);

CREATE INDEX sbp_lean_vessel_idx
    ON ga_marine.sbp_lean (vessel);

-- Create layer sidescan tables
CREATE TABLE ga_marine.sidescan
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

GRANT ALL ON TABLE ga_marine.sidescan TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sidescan TO marine_api;

CREATE TABLE ga_marine.sidescan_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.sidescan_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sidescan_bundle TO marine_api;

CREATE INDEX sidescan_bundle_bext_idx
    ON ga_marine.sidescan_bundle (bext);

CREATE INDEX sidescan_bundle_bundle_idx
    ON ga_marine.sidescan_bundle (bundle);

CREATE INDEX sidescan_bundle_file_size_idx
    ON ga_marine.sidescan_bundle (file_size);

CREATE INDEX sidescan_bundle_geom_id_idx
    ON ga_marine.sidescan_bundle (geom_id);

CREATE INDEX sidescan_bundle_time_end_idx
    ON ga_marine.sidescan_bundle (time_end);

CREATE INDEX sidescan_bundle_time_start_idx
    ON ga_marine.sidescan_bundle (time_start);

CREATE INDEX sidescan_bundle_vessel_idx
    ON ga_marine.sidescan_bundle (vessel);

CREATE SEQUENCE ga_marine.z_sidescan_geoms_id_seq;

CREATE TABLE ga_marine.sidescan_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('ga_marine.z_sidescan_geoms_id_seq'::regclass) not null
        constraint sidescan_geoms_pkey
            primary key
);

ALTER SEQUENCE ga_marine.z_sidescan_geoms_id_seq OWNED BY ga_marine.sidescan_geoms.id;

GRANT ALL ON TABLE ga_marine.sidescan_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sidescan_geoms TO marine_api;

CREATE INDEX sidescan_geoms_geom_idx
    ON ga_marine.sidescan_geoms using gist (geom);

CREATE TABLE ga_marine.sidescan_lean
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

GRANT ALL ON TABLE ga_marine.sidescan_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sidescan_lean TO marine_api;

-- Create layer sidescan_raw tables
CREATE TABLE ga_marine.sidescan_raw
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

GRANT ALL ON TABLE ga_marine.sidescan_raw TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sidescan_raw TO marine_api;

CREATE INDEX z_sidescan_raw_bext_idx
    ON ga_marine.sidescan_raw (bext);

CREATE INDEX z_sidescan_raw_bundle_idx
    ON ga_marine.sidescan_raw (bundle);

CREATE INDEX z_sidescan_raw_geom_idx
    ON ga_marine.sidescan_raw using gist (geom);

CREATE TABLE ga_marine.sidescan_raw_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.sidescan_raw_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sidescan_raw_bundle TO marine_api;

CREATE INDEX z_sidescan_raw_bundle_bext_idx
    ON ga_marine.sidescan_raw_bundle (bext);

CREATE INDEX z_sidescan_raw_bundle_bundle_idx
    ON ga_marine.sidescan_raw_bundle (bundle);

CREATE INDEX z_sidescan_raw_bundle_file_size_idx
    ON ga_marine.sidescan_raw_bundle (file_size);

CREATE INDEX z_sidescan_raw_bundle_geom_id_idx
    ON ga_marine.sidescan_raw_bundle (geom_id);

CREATE INDEX z_sidescan_raw_bundle_time_end_idx
    ON ga_marine.sidescan_raw_bundle (time_end);

CREATE INDEX z_sidescan_raw_bundle_time_start_idx
    ON ga_marine.sidescan_raw_bundle (time_start);

CREATE INDEX z_sidescan_raw_bundle_vessel_idx
    ON ga_marine.sidescan_raw_bundle (vessel);

CREATE SEQUENCE ga_marine.z_sidescan_raw_geoms_id_seq;

CREATE TABLE ga_marine.sidescan_raw_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('ga_marine.z_sidescan_raw_geoms_id_seq'::regclass) not null
        constraint z_sidescan_raw_geoms_pkey
            primary key
);

ALTER SEQUENCE ga_marine.z_sidescan_raw_geoms_id_seq OWNED BY ga_marine.sidescan_raw_geoms.id;

GRANT ALL ON TABLE ga_marine.sidescan_raw_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sidescan_raw_geoms TO marine_api;

CREATE INDEX z_sidescan_raw_geoms_geom_idx
    ON ga_marine.sidescan_raw_geoms using gist (geom);

CREATE TABLE ga_marine.sidescan_raw_lean
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

GRANT ALL ON TABLE ga_marine.sidescan_raw_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sidescan_raw_lean TO marine_api;

CREATE INDEX z_sidescan_raw_lean_bext_idx
    ON ga_marine.sidescan_raw_lean (bext);

CREATE INDEX z_sidescan_raw_lean_bundle_idx
    ON ga_marine.sidescan_raw_lean (bundle);

CREATE INDEX z_sidescan_raw_lean_ext_idx
    ON ga_marine.sidescan_raw_lean (ext);

CREATE INDEX z_sidescan_raw_lean_file_size_idx
    ON ga_marine.sidescan_raw_lean (file_size);

CREATE INDEX z_sidescan_raw_lean_geom_id_idx
    ON ga_marine.sidescan_raw_lean (geom_id);

CREATE INDEX z_sidescan_raw_lean_name_idx
    ON ga_marine.sidescan_raw_lean (name);

CREATE INDEX z_sidescan_raw_lean_time_end_idx
    ON ga_marine.sidescan_raw_lean (time_end);

CREATE INDEX z_sidescan_raw_lean_time_start_idx
    ON ga_marine.sidescan_raw_lean (time_start);

CREATE INDEX z_sidescan_raw_lean_vessel_idx
    ON ga_marine.sidescan_raw_lean (vessel);

-- Create layer sniffer tables
CREATE TABLE ga_marine.sniffer
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

GRANT ALL ON TABLE ga_marine.sniffer TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sniffer TO marine_api;

CREATE TABLE ga_marine.sniffer_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.sniffer_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sniffer_bundle TO marine_api;

CREATE INDEX z_sniffer_bundle_bext_idx
    ON ga_marine.sniffer_bundle (bext);

CREATE INDEX z_sniffer_bundle_bundle_idx
    ON ga_marine.sniffer_bundle (bundle);

CREATE INDEX z_sniffer_bundle_file_size_idx
    ON ga_marine.sniffer_bundle (file_size);

CREATE INDEX z_sniffer_bundle_geom_id_idx
    ON ga_marine.sniffer_bundle (geom_id);

CREATE INDEX z_sniffer_bundle_time_end_idx
    ON ga_marine.sniffer_bundle (time_end);

CREATE INDEX z_sniffer_bundle_time_start_idx
    ON ga_marine.sniffer_bundle (time_start);

CREATE INDEX z_sniffer_bundle_vessel_idx
    ON ga_marine.sniffer_bundle (vessel);

CREATE SEQUENCE ga_marine.z_sniffer_geoms_id_seq;

CREATE TABLE ga_marine.sniffer_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('ga_marine.z_sniffer_geoms_id_seq'::regclass) not null
);

ALTER SEQUENCE ga_marine.z_sniffer_geoms_id_seq OWNED BY ga_marine.sniffer_geoms.id;

GRANT ALL ON TABLE ga_marine.sniffer_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sniffer_geoms TO marine_api;

CREATE TABLE ga_marine.sniffer_lean
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

GRANT ALL ON TABLE ga_marine.sniffer_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.sniffer_lean TO marine_api;

CREATE INDEX z_sniffer_lean_bext_idx
    ON ga_marine.sniffer_lean (bext);

CREATE INDEX z_sniffer_lean_bundle_idx
    ON ga_marine.sniffer_lean (bundle);

CREATE INDEX z_sniffer_lean_ext_idx
    ON ga_marine.sniffer_lean (ext);

CREATE INDEX z_sniffer_lean_file_size_idx
    ON ga_marine.sniffer_lean (file_size);

CREATE INDEX z_sniffer_lean_geom_id_idx
    ON ga_marine.sniffer_lean (geom_id);

CREATE INDEX z_sniffer_lean_name_idx
    ON ga_marine.sniffer_lean (name);

CREATE INDEX z_sniffer_lean_time_end_idx
    ON ga_marine.sniffer_lean (time_end);

CREATE INDEX z_sniffer_lean_time_start_idx
    ON ga_marine.sniffer_lean (time_start);

CREATE INDEX z_sniffer_lean_vessel_idx
    ON ga_marine.sniffer_lean (vessel);

-- Create layer svp tables
CREATE TABLE ga_marine.svp
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

GRANT ALL ON TABLE ga_marine.svp TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.svp TO marine_api;

CREATE TABLE ga_marine.svp_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.svp_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.svp_bundle TO marine_api;

CREATE INDEX z_svp_bundle_bext_idx
    ON ga_marine.svp_bundle (bext);

CREATE INDEX z_svp_bundle_bundle_idx
    ON ga_marine.svp_bundle (bundle);

CREATE INDEX z_svp_bundle_file_size_idx
    ON ga_marine.svp_bundle (file_size);

CREATE INDEX z_svp_bundle_geom_id_idx
    ON ga_marine.svp_bundle (geom_id);

CREATE INDEX z_svp_bundle_time_end_idx
    ON ga_marine.svp_bundle (time_end);

CREATE INDEX z_svp_bundle_time_start_idx
    ON ga_marine.svp_bundle (time_start);

CREATE INDEX z_svp_bundle_vessel_idx
    ON ga_marine.svp_bundle (vessel);

CREATE SEQUENCE ga_marine.z_svp_geoms_id_seq;

CREATE TABLE ga_marine.svp_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('ga_marine.z_svp_geoms_id_seq'::regclass) not null
);

ALTER SEQUENCE ga_marine.z_svp_geoms_id_seq OWNED BY ga_marine.svp_geoms.id;

GRANT ALL ON TABLE ga_marine.svp_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.svp_geoms TO marine_api;

CREATE TABLE ga_marine.svp_lean
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

GRANT ALL ON TABLE ga_marine.svp_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.svp_lean TO marine_api;

CREATE INDEX z_svp_lean_bext_idx
    ON ga_marine.svp_lean (bext);

CREATE INDEX z_svp_lean_bundle_idx
    ON ga_marine.svp_lean (bundle);

CREATE INDEX z_svp_lean_ext_idx
    ON ga_marine.svp_lean (ext);

CREATE INDEX z_svp_lean_file_size_idx
    ON ga_marine.svp_lean (file_size);

CREATE INDEX z_svp_lean_geom_id_idx
    ON ga_marine.svp_lean (geom_id);

CREATE INDEX z_svp_lean_name_idx
    ON ga_marine.svp_lean (name);

CREATE INDEX z_svp_lean_time_end_idx
    ON ga_marine.svp_lean (time_end);

CREATE INDEX z_svp_lean_time_start_idx
    ON ga_marine.svp_lean (time_start);

CREATE INDEX z_svp_lean_vessel_idx
    ON ga_marine.svp_lean (vessel);

-- Create layer tides tables
CREATE TABLE ga_marine.tides
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

GRANT ALL ON TABLE ga_marine.tides TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.tides TO marine_api;

CREATE TABLE ga_marine.tides_bundle
(
    bundle     text,
    bext       text,
    time_start timestamp with time zone,
    time_end   timestamp with time zone
);

GRANT ALL ON TABLE ga_marine.tides_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.tides_bundle TO marine_api;

-- Create layer vis_summary tables
CREATE TABLE ga_marine.vis_summary
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

GRANT ALL ON TABLE ga_marine.vis_summary TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.vis_summary TO marine_api;

CREATE TABLE ga_marine.vis_summary_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.vis_summary_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.vis_summary_bundle TO marine_api;

CREATE TABLE ga_marine.vis_summary_geoms
(
    geom geometry(Geometry, 4326),
    id   serial
);

GRANT ALL ON TABLE ga_marine.vis_summary_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.vis_summary_geoms TO marine_api;

CREATE TABLE ga_marine.vis_summary_lean
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

GRANT ALL ON TABLE ga_marine.vis_summary_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.vis_summary_lean TO marine_api;

-- Create layer wc tables
CREATE TABLE ga_marine.wc
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

GRANT ALL ON TABLE ga_marine.wc TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.wc TO marine_api;

CREATE TABLE ga_marine.wc_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.wc_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.wc_bundle TO marine_api;

CREATE INDEX z_wc_bundle_bext_idx
    ON ga_marine.wc_bundle (bext);

CREATE INDEX z_wc_bundle_bundle_idx
    ON ga_marine.wc_bundle (bundle);

CREATE INDEX z_wc_bundle_file_size_idx
    ON ga_marine.wc_bundle (file_size);

CREATE INDEX z_wc_bundle_geom_id_idx
    ON ga_marine.wc_bundle (geom_id);

CREATE INDEX z_wc_bundle_time_end_idx
    ON ga_marine.wc_bundle (time_end);

CREATE INDEX z_wc_bundle_time_start_idx
    ON ga_marine.wc_bundle (time_start);

CREATE INDEX z_wc_bundle_vessel_idx
    ON ga_marine.wc_bundle (vessel);

CREATE SEQUENCE ga_marine.z_wc_geoms_id_seq;

CREATE TABLE ga_marine.wc_geoms
(
    geom geometry(Geometry, 4326),
    id   integer default nextval('ga_marine.z_wc_geoms_id_seq'::regclass) not null
        constraint z_wc_geoms_pkey
            primary key
);

ALTER SEQUENCE ga_marine.z_wc_geoms_id_seq OWNED BY ga_marine.wc_geoms.id;

GRANT ALL ON TABLE ga_marine.wc_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.wc_geoms TO marine_api;

CREATE INDEX z_wc_geoms_geom_idx
    ON ga_marine.wc_geoms using gist (geom);

CREATE TABLE ga_marine.wc_lean
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

GRANT ALL ON TABLE ga_marine.wc_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.wc_lean TO marine_api;

-- Create layer weather tables
CREATE TABLE ga_marine.weather
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

GRANT ALL ON TABLE ga_marine.weather TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.weather TO marine_api;

CREATE INDEX weather_bext_idx
    ON ga_marine.weather (bext);

CREATE INDEX weather_bundle_idx
    ON ga_marine.weather (bundle);

CREATE INDEX weather_ext_idx
    ON ga_marine.weather (ext);

CREATE INDEX weather_file_size_idx
    ON ga_marine.weather (file_size);

CREATE INDEX weather_geom_id_idx
    ON ga_marine.weather (geom_id);

CREATE INDEX weather_name_idx
    ON ga_marine.weather (name);

CREATE INDEX weather_time_end_idx
    ON ga_marine.weather (time_end);

CREATE INDEX weather_time_start_idx
    ON ga_marine.weather (time_start);

CREATE INDEX weather_vessel_idx
    ON ga_marine.weather (vessel);

CREATE TABLE ga_marine.weather_bundle
(
    bundle     text,
    bext       text,
    file_size  numeric,
    time_start timestamp with time zone,
    time_end   timestamp with time zone,
    vessel     text,
    geom_id    bigint
);

GRANT ALL ON TABLE ga_marine.weather_bundle TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.weather_bundle TO marine_api;

CREATE INDEX weather_bundle_bext_idx
    ON ga_marine.weather_bundle (bext);

CREATE INDEX weather_bundle_bundle_idx
    ON ga_marine.weather_bundle (bundle);

CREATE INDEX weather_bundle_file_size_idx
    ON ga_marine.weather_bundle (file_size);

CREATE INDEX weather_bundle_geom_id_idx
    ON ga_marine.weather_bundle (geom_id);

CREATE INDEX weather_bundle_time_end_idx
    ON ga_marine.weather_bundle (time_end);

CREATE INDEX weather_bundle_time_start_idx
    ON ga_marine.weather_bundle (time_start);

CREATE INDEX weather_bundle_vessel_idx
    ON ga_marine.weather_bundle (vessel);

CREATE TABLE ga_marine.weather_geoms
(
    geom geometry(Geometry, 4326),
    id   serial
);

GRANT ALL ON TABLE ga_marine.weather_geoms TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.weather_geoms TO marine_api;

CREATE TABLE ga_marine.weather_lean
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

GRANT ALL ON TABLE ga_marine.weather_lean TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE ga_marine.weather_lean TO marine_api;
