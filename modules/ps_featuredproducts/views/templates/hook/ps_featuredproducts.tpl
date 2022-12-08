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

    <div class="row featuredsection">
      <div class="col-12 col-md-3">
        <div class="textleftbox">
            <h4>Urządzenia skanujące</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div class="textleftbox">
            <h4>Komputery</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <div class="col-12 col-md-9">

       {block name='featured_products'}
  <div class="featured-products my-4 {block name='featured_products_class'}dsa{/block}">

    {block name='featured_products_header'}
      <div class="featured-products__header d-flex align-items-center mb-3">
        {block name='featured_products_title' hide}
          <p class="h1 featured-products__title">
            {$smarty.block.child}
          </p>
        {/block}
       
      </div>
    {/block}


    <div class="product-slider py-1 my-n1">
      
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




  </div>
{/block}

      </div>

  </div>

