{*
 * 2007-2020 PrestaShop.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
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
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}

{if $homeslider.slides}
<div class="homeslider position-relative">
    {$sliderConfig = [
    "autoplay" => [
    "delay" => $homeslider.speed
    ],
    "preloadImages" => false,
    "lazy" => true,
    "navigation" => [
    "nextEl" => ".homeslider__arrow--next",
    "prevEl" => ".homeslider__arrow--prev"
    ]
    ]}

  <div class="swiper" data-swiper='{$sliderConfig|json_encode}' data-swiper-thumbs="#homeslider-thumbs">
    <ul class="swiper-wrapper homeslider__list">
      {images_block}
        {foreach from=$homeslider.slides item=slide}
          <li class="swiper-slide homeslider__slide">
            <a href="{$slide.url}">
              {if $slide@first}
                <img
                  class="img-fluid"
                  src="{$slide.image_url}"
                  alt="{$slide.title}"
                  {if !empty($slide.sizes)}
                    width="{$slide.sizes.0}"
                    height="{$slide.sizes.1}"
                  {/if}
                  >
              {else}
                <img
                  class="img-fluid homeslider__img swiper-lazy"
                  data-src="{$slide.image_url}"
                  alt="{$slide.title}"
                  {if !empty($slide.sizes)}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='{$slide.sizes.0}' height='{$slide.sizes.1}' viewBox='0 0 1 1'%3E%3C/svg%3E"
                    width="{$slide.sizes.0}"
                    height="{$slide.sizes.1}"
                  {/if}
                  >
              {/if}

{*              {if $slide.title || $slide.description }
                <span class="homeslider__caption">
                  <h2 class="homeslider__title">{$slide.title}</h2>
                  <div class="homeslider__desc">{$slide.description nofilter}</div>
                </span>
              {/if}*}
            </a>
          </li>
        {/foreach}
      {/images_block}
    </ul>
  </div>

    {if $homeslider.slides|count > 1}
        <div class="swiper-button-prev swiper-button-custom homeslider__arrow homeslider__arrow--prev">
            <img class="img-fluid" src="{$urls.img_url}swiper-arrow.svg" />
        </div>
        <div class="swiper-button-next swiper-button-custom homeslider__arrow homeslider__arrow--next">
            <img class="img-fluid" src="{$urls.img_url}swiper-arrow.svg" />
        </div>
    {/if}

    {$thumbConfig = [
    "slidesPerView" => 7,
    "watchOverflow" => true
    ]}

    <div class="homeslider__thumbnails d-none d-lg-block">
        <div class="container">
            <div class="homeslider__thumbnails-content">
                <div
                        id="homeslider-thumbs"
                        class="swiper-container swiper-container-custom homeslider__thumbs-slider"
                        data-swiper='{$thumbConfig|json_encode}'>
                    <div class="swiper-wrapper">
                        {foreach from=$homeslider.slides item=slide name='homeslider'}
                            <div class="swiper-slide {if $slide@first}swiper-slide-thumb-active{/if} homeslider__thumbnails-slide">
                                <span class="homeslider__thumbnails-title">{$slide.title}</span>
                            </div>
                        {/foreach}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/if}
