{*
* 2007-2022 ETS-Soft
*
* NOTICE OF LICENSE
*
* This file is not open source! Each license that you purchased is only available for 1 wesite only.
* If you want to use this file on more websites (or projects), you need to purchase additional licenses. 
* You are not allowed to redistribute, resell, lease, license, sub-license or offer our resources to any third party.
* 
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs, please contact us for extra customization service at an affordable price
*
*  @author ETS-Soft <etssoft.jsc@gmail.com>
*  @copyright  2007-2022 ETS-Soft
*  @license    Valid for 1 website (or project) for each purchase of license
*  International Registered Trademark & Property of ETS-Soft
*}
{assign var='i' value=0}
{foreach from=$products_list key='key' item="product"}
    {block name='product_miniature'}
        {assign var='i' value=$i + 1}
    {/block}
{/foreach}
<h4 class="heederproducts">{l s="Promotions" mod='ets_hotdeals'}</h4>

<div class="row"> 
{if $i > 0}
    <div class="ybc_countdown col-12 col-md-4">
        <div id="ets_hotdeals" class="{if isset($ets_hotdeals_display_type) && $ets_hotdeals_display_type} ets_hotdeal_{$ets_hotdeals_display_type|escape:'html':'UTF-8'}{/if}">
            <h3 class="h1 products-section-title">
                {$specific_title|escape:'html':'UTF-8'}
            </h3>
            <div class="ets-product-specific{if $ets_hotdeals_product_per_row_desktop > $i} hidden_nav_des{/if}
            {if $ets_hotdeals_product_per_row_tabletlarge > $i} hidden_nav_tablarge{/if}
            {if $ets_hotdeals_product_per_row_tablet > $i} hidden_nav_tablet{/if}
            {if $ets_hotdeals_product_per_row_mobile > $i} hidden_nav_mobile{/if} row" data-desktop="{$ets_hotdeals_product_per_row_desktop|escape:'html':'UTF-8'}" data-tablet-horz="{$ets_hotdeals_product_per_row_tabletlarge|escape:'html':'UTF-8'}" data-tablet="{$ets_hotdeals_product_per_row_tablet|escape:'html':'UTF-8'}" data-mobile="{$ets_hotdeals_product_per_row_mobile|escape:'html':'UTF-8'}" data-speed="{$ets_hotdeals_speed|escape:'html':'UTF-8'}" data-play="{$ets_hotdeals_auto_play_slider|escape:'html':'UTF-8'}" data-stop="{$ets_hotdeals_stop_hover|escape:'html':'UTF-8'}" >
                {assign var='ets_item_desktop' value=intval(12/$ets_hotdeals_product_per_row_desktop)}
                {assign var='ets_item_tabletlarge' value=intval(12/$ets_hotdeals_product_per_row_tabletlarge)}
                {assign var='ets_item_tablet' value=intval(12/$ets_hotdeals_product_per_row_tablet)}
                {assign var='ets_item_mobile' value=intval(12/$ets_hotdeals_product_per_row_mobile)}
                
                {foreach from=$products_list key='key' item="product"}
                    {block name='product_miniature'}
                        {include file='modules/ets_hotdeals/views/templates/hook/_product.tpl' product=$product key=$key}
                    {/block}
                {/foreach}
            </div>
        </div>


        <div class="progressinfo"><div class="itemprog">Pozostało:<p>40</p></div><div class="itemprog">sprzedano: <p>20</p></div></div>

        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

    </div>


{/if}