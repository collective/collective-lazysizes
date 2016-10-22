********************
collective.lazysizes
********************

.. contents:: Table of Contents

Life, the Universe, and Everything
==================================
Lazy Sizes introduces `lazysizes`_ to Plone pages.  Lazysizes replaces out-of-view page images with a grey box until the user scrolls the page to where the picture should be visible.  Then, the picture is seamlessly inserted and page is properly displayed.

This reduces page load times up to 80%, 75% in page size and 50% in number of requests.





Mostly Harmless
===============

.. image:: http://img.shields.io/pypi/v/collective.lazysizes.svg
   :target: https://pypi.python.org/pypi/collective.lazysizes

.. image:: https://img.shields.io/travis/collective/collective.lazysizes/master.svg
    :target: http://travis-ci.org/collective/collective.lazysizes

.. image:: https://img.shields.io/coveralls/collective/collective.lazysizes/master.svg
    :target: https://coveralls.io/r/collective/collective.lazysizes

These are some sites using ``collective.lazysizes``:

* `CartaCapital <http://www.cartacapital.com.br/>`_ (BR)
* `Conversa Afiada <http://www.conversaafiada.com.br/>`_ (BR)
* `Portal Brasil 2016 <http://www.brasil2016.gov.br/>`_ (BR)

As long as `we have tested <https://github.com/aFarkas/lazysizes/issues/239>`_, `lazysizes`_ seems not to interfere with image indexing made by crawlers like Googlebot.

Got an idea? Found a bug? Let us know by `opening a support ticket <https://github.com/collective/collective.lazysizes/issues>`_.

Don't Panic
===========

Installation
------------

To enable this package in a buildout-based installation:

#. Edit your buildout.cfg and add add the following to it::

    [buildout]
    ...
    eggs =
        collective.lazysizes

After updating the configuration you need to run ''bin/buildout'', which will take care of updating your system.

Go to the 'Site Setup' page in a Plone site and click on the 'Add-ons' link.

Check the box next to ``collective.lazysizes`` and click the 'Activate' button.

.. Note::
    You may have to empty your browser cache and save your resource registries in order to see the effects of the product installation.

How does it work
----------------

This package adds a transformer to the transform chain to integrate `lazysizes`_ into Plone.

The transformer looks for all the ``<img>``, ``<iframe>`` and ``<blockquote>`` tags inside the content and does the following:

* appends a ``lazyload`` class
* if the tag is an ``<img>``, transforms the ``src`` attribute into a ``data-src`` and uses a gray square in its place to maintain valid HTML code (this placeholder is loaded using the data URI scheme to avoid a new request to the server)
* if the tag is an ``<iframe>``, transforms the ``src`` attribute into a ``data-src``
* if the tag is a ``<blockquote>`` `containing a tweet <https://dev.twitter.com/web/embedded-tweets>`_, it adds a ``data-twitter`` attribute and removes the ``<script>`` tag associated with the Twitter widget to avoid a useless request

These transforms are applied to anonymous users only.

Todo
----

* implement support for responsive images with ``srcset`` and automatic ``sizes`` attribute

.. _`lazysizes`: https://afarkas.github.io/lazysizes/
