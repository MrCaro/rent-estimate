import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

function Feature() {
    return (
        <div className="bg-grape-400">
            <div className="mx-auto max-w-md py-16 px-4 text-center sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    <span className="block text-white">
                        Looking for a new career?
                    </span>
                    <span className="block text-grape-900">We’re hiring.</span>
                </h2>
                <a
                    href="#"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white py-3 px-5 text-base font-medium text-grape-600 shadow-md hover:bg-grape-50 sm:w-auto"
                >
                    <span>See open positions</span>
                    <ArrowTopRightOnSquareIcon
                        className="ml-3 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                    />
                </a>
            </div>
        </div>
    )
}

export default Feature
