{**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 *}

{block name='featured_products'}
  <div class="featured-products  {block name='featured_products_class'}{/block} bestsellersbox">

    {block name='featured_products_header'}
      <div class="featured-products__header d-flex align-items-center mb-3">
      
        {block name='featured_products_title'}
                    <p class="h1 featured-products__title">{l s='Best Sellers' d='Shop.Theme.Catalog'}</p>
        {/block}
               
      </div>
    {/block}

    {$sliderConfig = [
      'speed' => 500,
      'breakpoints' => [
        '320' => [
          'slidesPerView' => 2
        ],
        '768' => [
          'slidesPerView' => 3
        ],
        '992' => [
          'slidesPerView' => 4
        ]
      ]
    ]}
        <div class="featured-products__navigation d-flex flex-grow-0 flex-shrink-0 ml-auto">
          <div class="swiper-button-prev swiper-button-custom position-static">
            <span class="sr-only">{l s='Previous' d='Shop.Theme.Actions'}</span>
            <span class="material-icons">keyboard_arrow_left</span>
          </div>
          <div class="swiper-button-next swiper-button-custom position-static">
            <span class="sr-only">{l s='Next' d='Shop.Theme.Actions'}</span>
            <span class="material-icons">keyboard_arrow_right</span>
          </div>
        </div>
    <div class="swiper product-slider py-1 my-n1" data-swiper='{block name="featured_products_slider_options"}{$sliderConfig|json_encode}{/block}'>
     
      {block name='featured_products_products'}
        <div class="featured-products__slider swiper-wrapper {block name='featured_products_slider_class'}{/block}">
          {foreach from=$products item="product"}
            {block name='product_miniature'}
              {include file='catalog/_partials/miniatures/product.tpl' product=$product type='slider'}
            {/block}
          {/foreach}
        </div>
      {/block}
    </div>

    {block name='featured_products_footer' hide}
      <div class="featured-products__footer mt-4 text-right">
        {$smarty.block.child}
      </div>
    {/block}


  </div>
{/block}
