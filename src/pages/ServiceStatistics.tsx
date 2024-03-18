function ServiceStatistics() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-green- sm:text-4xl">Our Food Service Statistics</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
            <div className="bg-green-500 overflow-hidden shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <dl>
                        <dt className="text-sm leading-5 font-medium text-white truncate">Total recipes</dt>
                        <dd className="mt-1 text-3xl leading-9 font-semibold text-white">10.5K</dd>
                    </dl>
                </div>
            </div>
            <div className="bg-green-500 overflow-hidden shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <dl>
                        <dt className="text-sm leading-5 font-medium text-white truncate">Recipes added monthly</dt>
                        <dd className="mt-1 text-3xl leading-9 font-semibold text-white">1.2K</dd>
                    </dl>
                </div>
            </div>
            <div className="bg-green-500 overflow-hidden shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <dl>
                        <dt className="text-sm leading-5 font-medium text-white truncate">Recipes added weekly</dt>
                        <dd className="mt-1 text-3xl leading-9 font-semibold text-white">300</dd>
                    </dl>
                </div>
            </div>
            <div className="bg-green-500 overflow-hidden shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <dl>
                        <dt className="text-sm leading-5 font-medium text-white truncate">Total users</dt>
                        <dd className="mt-1 text-3xl leading-9 font-semibold text-white">256.8K</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
    
    )
}


export default ServiceStatistics;