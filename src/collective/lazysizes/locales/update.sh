#!/bin/bash
# i18ndude should be available in current $PATH (eg by running
# ``export PATH=$PATH:$BUILDOUT_DIR/bin`` when i18ndude is located in your buildout's bin directory)
#
# For every language you want to translate into you need a
# locales/[language]/LC_MESSAGES/collective.lazysizes.po
# (e.g. locales/pt_BR/LC_MESSAGES/collective.lazysizes.po)

I18NDUDE=i18ndude
domain=collective.lazysizes

$I18NDUDE rebuild-pot --pot $domain.pot --create $domain `find .. -name *.py -o -name *.pt -o -name *.zcml -o -name *.xml |sort|tr '\n' ' '`
$I18NDUDE sync --pot $domain.pot */LC_MESSAGES/$domain.po

$I18NDUDE find-untranslated `find .. -name *.pt -o -name *.xml|sort|tr '\n' ' '`
