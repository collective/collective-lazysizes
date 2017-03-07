# -*- coding: utf-8 -*-
from collective.lazysizes.config import IS_PLONE_5
from collective.lazysizes.logger import logger
from plone import api


JS = '++resource++collective.lazysizes/ls.respimg.min.js'


def remove_respimg_polyfill(setup_tool):
    """Use AMD version of Lazysizes."""
    if IS_PLONE_5:
        logger.warn('Upgrade step not supported under Plone 5')
        return

    portal_js = api.portal.get_tool('portal_javascripts')
    if JS in portal_js.getResourceIds():
        portal_js.unregisterResource(JS)
        assert JS not in portal_js.getResourceIds()
        logger.info('respimg polyfill plugin was removed')
