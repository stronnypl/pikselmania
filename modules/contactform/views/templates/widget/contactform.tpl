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
<section class="contact-form{if $page.page_name != 'contact'} col-md-4{/if}">
  <form class="contact-form__form{if $page.page_name == 'contact'} mx-auto{/if}" action="{$urls.pages.contact}" method="post" {if $contact.allow_file_upload}enctype="multipart/form-data"{/if}>

    <div class="{if $page.page_name == 'contact'}contact__title-wrapper{else}footer__title-wrapper{/if}">
      <div class="{if $page.page_name == 'contact'}contact__title{else}footer__title{/if}">{l s='Masz pytania? Potrzebujesz pomocy?' d='Shop.Theme.Global'}</div>
    </div>

    <div class="contact-form__body">

      {if $notifications}
        <div class="col-12 alert {if $notifications.nw_error}alert-danger{else}alert-info{/if} text-black font-weight-bold">
          {foreach $notifications.messages as $notif}
            {$notif}<br/>
          {/foreach}
        </div>
      {/if}

      {if !$notifications || $notifications.nw_error}
        <section class="form-fields">

          <input type="hidden" name="id_contact" value="2" />

          <div class="form-group">
            <input
                    class="form-control"
                    name="name"
                    type="text"
                    required
                    placeholder="{l s='Imię i nazwisko' d='Shop.Forms.Help'}"
            >
          </div>

          <div class="form-group">
            <input
                    class="form-control"
                    name="from"
                    type="email"
                    required
                    value="{$contact.email}"
                    placeholder="{l s='E-mail' d='Shop.Forms.Help'}"
            >
          </div>

          {if 0 && $contact.orders}
            <div class="form-group">
              <label class="form-control-label">{l s='Order reference' d='Shop.Forms.Labels'}</label>
              <select name="id_order" class="custom-select">
                <option value="">{l s='Select reference' d='Shop.Forms.Help'}</option>
                {foreach from=$contact.orders item=order}
                  <option value="{$order.id_order}">{$order.reference}</option>
                {/foreach}
              </select>
              <small class="form-text text-muted">
                {l s='optional' d='Shop.Forms.Help'}
              </small>
            </div>
          {/if}

          {if 0 && $contact.allow_file_upload}
            <div class="form-group">
              <label class="form-control-label">{l s='Attachment' d='Shop.Forms.Labels'}</label>

              <div class="custom-file">
                <input name="fileUpload" type="file" class="custom-file-input" id="fileUpload">
                <label class="custom-file-label" for="fileUpload">{l s='Choose file' d='Shop.Theme.Actions'}</label>
              </div>
              <small class="form-text text-muted">
                {l s='optional' d='Shop.Forms.Help'}
              </small>
            </div>
          {/if}

          <div class="form-group">
            <textarea
              class="form-control"
              name="message"
              required
              placeholder="{l s='Wiadomość' d='Shop.Forms.Help'}"
              rows="5"
            >{if $contact.message}{$contact.message}{/if}</textarea>
          </div>

          {if isset($id_module)}
            <div class="form-group">
              {hook h='displayGDPRConsent' id_module=$id_module}
            </div>
          {/if}

        {hook h='displayPaCaptcha' posTo='contact'}</section>

        <footer class="form-footer text-center">
          <p class="small text-left label-required"><sup>*</sup> {l s='Pole wymagane' d='Shop.Theme.Global'}</p>
          <style>
            input[name=url] {
              display: none !important;
            }
          </style>
          <input type="text" name="url" value=""/>
          <input type="hidden" name="token" value="{$token}" />
          <input type="hidden" name="submitMessage" value="1" />
          <button class="btn btn-lightblue text-transform-none contact-form__button d-none d-md-inline-block" type="submit">{l s='Send' d='Shop.Theme.Actions'}</button>
          <button class="btn btn-lightblue text-transform-none btn-block d-block d-md-none" type="submit">{l s='Send' d='Shop.Theme.Actions'}</button>
        </footer>
      {/if}
    </div>



  </form>
</section>
