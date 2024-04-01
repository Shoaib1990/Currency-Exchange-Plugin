<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://shoaibkhalid.ca
 * @since             1.0.0
 * @package           Exchange_Rate_Converter
 *
 * @wordpress-plugin
 * Plugin Name:       Exchange Rate Converter
 * Plugin URI:        https://shoaibkhalid.ca
 * Description:       This plugin would give you a currency exchange rate.
 * Version:           1.0.0
 * Author:            Shoaib Khalid
 * Author URI:        https://shoaibkhalid.ca
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       exchange-rate-converter
 * Domain Path:       /languages
 */

add_action( 'wp_enqueue_scripts', 'exchange_rate_converter_assets' );

function exchange_rate_converter_assets() {
	wp_register_style('current_exchange_stylesheet', plugins_url('/assets/css/styles.css' , __FILE__) );
	wp_register_script('current_exchange_script', plugins_url('/assets/js/script.js' , __FILE__) );
	
}

add_shortcode('currency_exchange_rate','run_exchange_rate_converter');

function run_exchange_rate_converter() {
	
	wp_enqueue_style( 'current_exchange_stylesheet' );
	wp_enqueue_script( 'current_exchange_script' );
	
	
	return exchange_rate_converter_render();
}

function exchange_rate_converter_render() {
	
	$html = 
		'<div class="form_container">
			<form method="get" class="currency_exchange_form">
				<span class="from">from</span>
				<select class="from_currency_select">
					<option class="from_currency_option">Currency</option>
				</select>
				<span class="to">to</span>
				<select class="to_currency_select">
					<option class="to_currency_option">Currency</option>
				</select>
				
			</form>
			<p class="result">
				<span class="rate"></span>
				<span class="code"></span>
			</p>
		</div>';
	
	return $html;
}

