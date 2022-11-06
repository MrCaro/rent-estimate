import DynamicHeroIcon from '../DynamicHeroIcon/DynamicHeroIcon'

const footerNavigation = {
    solutions: [{ name: 'Marketing', href: 'https://realtymole.com/' }],
    support: [
        {
            name: 'Pricing',
            href: 'https://rapidapi.com/moneals/api/rent-estimate/pricing',
        },
        {
            name: 'API Status',
            href: 'https://rapidapi.com/moneals/api/rent-estimate/details',
        },
    ],
    company: [
        {
            name: 'About',
            href: 'https://rapidapi.com/moneals/api/rent-estimate/details',
        },
    ],
    legal: [
        {
            name: 'Privacy',
            href: 'https://rapidapi.com/moneals/api/rent-estimate/discussions',
        },
        {
            name: 'Terms',
            href: 'https://rapidapi.com/moneals/api/rent-estimate/discussions',
        },
    ],
}

const date = new Date()

function Footer() {
    return (
        <footer className="bg-gray-900" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-md py-12 px-4 sm:max-w-lg sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8 lg:pt-24 lg:pb-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-400">
                            <DynamicHeroIcon icon={'HomeModernIcon'} />
                        </span>
                        <p className="text-base text-gray-400">
                            Unlimited access to millions of property records
                            across the United States updated multiple times per
                            day.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-200">
                                    Solutions
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {footerNavigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-400 hover:text-gray-300"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-gray-200">
                                    Support
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {footerNavigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-400 hover:text-gray-300"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-200">
                                    Company
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {footerNavigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-400 hover:text-gray-300"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-gray-200">
                                    Legal
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {footerNavigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-base text-gray-400 hover:text-gray-300"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">
                        &copy; {date.getFullYear()}
                        <a
                            href="https://www.carloscaro.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Carlos 'Charlie' Caro | Front-End Developer.
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
