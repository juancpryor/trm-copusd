# trm-copusd
Simple JS webapp to pull information about the official COP/USD exchange rate.

## Purpose 

TRM stands for representative exchange rate (tasa representativa del mercado, in Spanish) and is calculated by the Superintendencia Financiera de Colombia as a weighted average of COP/USD same day cash transactions carried out by authorized dealers within the set market hours.

Weekends, non-banking days, and any other days in which TRM cannot be calculated, the TRM used will be the last rate used and certified.

As per Colombian regulation, non-exempt agreements and other obligations stipulated in foreign currency must be paid in local currency at the TRM of the effective date, unless parties agree on a differente rate.

Tax obligations with DIAN (Colombian Tax Authority) must consider for reexpression of financial accounts into COP, in which TRM also plays an important part if original account is expressed in USD.

## Deploying

### Prerrequisites

Register for an app token in [Datos.gov Developer Settings](https://www.datos.gov.co/profile/edit/developer_settings).

Dependencies:

* jQuery 3.5.1
* Bootstrap 4.5.0
* dateFns 2.0.0

It may work with alternative versions but has not been tested in other versions so far.

### Deployment

* Register and create an account at [Datos Abiertos Portal](https://www.datos.gov.co)
* Go to [Developer Settings](https://www.datos.gov.co/profile/edit/developer_settings) and create an app and copy the app token to use in the code.
* Copy & Paste, and use.

## Contributing

Feel free to contribute by properly commenting and being respectful.

Additional tasks to be executed include:

- [x] Table for date range
- [ ] Search for previous TRM when no data is provided by the API
- [ ] Date format verification (date is passed as a string in the YYYY-MM-DD format)
- [ ] Graph date range

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/juancpryor/trm-copusd/tags). 

## Authors

* **juancpryor** - *Initial work* - [juancpryor](https://github.com/juancpryor)

See also the list of [contributors](https://github.com/juancpryor/trm-cousd/contributors) who participated in this project.

## License

This project is licensed under the GNU Lesser General Public License v3.0 - see the [LICENSE.md](https://github.com/juancpryor/trm-copusd/blob/master/LICENSE) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
