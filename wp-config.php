<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'Foodolau_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'h[sW,k5T0R/%@i1Pk@fmOfXgEO_!W<wx)*Sj}dAPzw7]IpLl2=){CW|7minRp{&}');
define('SECURE_AUTH_KEY',  ',QmC;)V<lW5[Z8RUzeH`8d`<WjdA3dY];e+kcNUDU9E5dr9yNRku+zcpzxWpJ1YL');
define('LOGGED_IN_KEY',    '@ealRgoScO;}F!WO2/,YY>hN%T(Z$70S8,s1wFN9G/jM7RW:Y;r5b+ip[m%lyW{%');
define('NONCE_KEY',        'aWA?C6p6^O9|<q^hB`[I N%h[cL8-aH8y<Wvot9fpxqS+rwj#0/4MJhR%Vzv%`I`');
define('AUTH_SALT',        'G<<IsGk,gs#f$6Cbqb/^#JQj-O<X? mqTO*n.fcPkxI]f0RU]Lw#Wi,}yz5>_r_]');
define('SECURE_AUTH_SALT', '6Yw=2`a$>Nf#_Y9IS4cTIZ w/[gHtyz=&!QcB2XT~2$Rvpl).Z~|Gy>_3W6lk]d~');
define('LOGGED_IN_SALT',   '!M%^1KvTL=qx!$9b}(isec|@ND)v2rq@e:D`GS* R96i<;UaNKhX01q7@Y+xxPD6');
define('NONCE_SALT',       '#!KIt[8zu6Pd[Hw5A2>@+OO+4 {{|8LrC!z[UUUYY?_@[jPJuzc+e/DxXZ!MA|*v');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
