# Copyright Nova Code (http://www.novacode.nl)
# See LICENSE file for full licensing details.

{
    'name': 'Forms Partner',
    'summary': 'Forms on Partners',
    'version': '1.0',
    'license': 'LGPL-3',
    'author': 'Nova Code',
    'website': 'https://www.novacode.nl',
    'live_test_url': 'https://demo13.novacode.nl',
    'category': 'Contacts',
    'depends': ['contacts', 'formio'],
    'data': [
        'data/formio_partner_data.xml',
        'views/formio_form_views.xml',
        'views/res_partner_views.xml',
    ],
    'application': True,
    'images': [
        'static/description/banner.png',
    ],
    'description': """
Forms - Partners
================

Build and publish Forms for Partners.
"""
}
