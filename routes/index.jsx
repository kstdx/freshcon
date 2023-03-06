import { Provider } from '../components/provider.jsx'

export default () => {
    const speakers = [
        {
            name: 'Foo Bar',
            id: 'kstdx',
            work: 'Foo Bar',
            color: 'gray'
        },
        {
            name: 'Foo Bar',
            id: 'kstdx',
            work: 'Foo that bar',
            color: 'red'
        },
        {
            name: 'Foo Bar',
            id: 'kstdx',
            work: 'Foo that bar',
            color: 'blue'
        },
        {
            name: 'Foo Bar',
            id: 'kstdx',
            work: 'Foo that bar',
            color: 'green'
        },
        {
            name: 'Foo Bar',
            id: 'kstdx',
            work: 'Foo that bar',
            color: 'yellow'
        },
        {
            name: 'Foo Bar',
            id: 'kstdx',
            work: 'Foo that bar',
            color: 'purple'
        },
        {
            name: 'Foo Bar',
            id: 'kstdx',
            work: 'Foo that bar',
            color: 'cyan'
        },
        {
            name: 'Foo Bar',
            id: 'kstdx',
            work: 'Foo that bar',
            color: 'pink'
        },
        {
            name: 'Foo Bar',
            id: 'kstdx',
            work: 'Foo that bar',
            color: 'indigo'
        }
    ]

    return (
        <Provider title='FreshCon 2023'>
            <div className='text-center'>
                <h1 className='inline-block text-7xl font-black text-center mt-20 text-transparent bg-gradient-to-r bg-clip-text from-[#ffc800] via-[#c93636] to-[#9d00ff]'>
                    FreshCon
                </h1>
                <p className='mt-5 text-slate-400 font-medium'>
                    Opened by <a href='//kstdx.com'>kstdx</a>
                </p>
            </div>
            <div className='mt-10 text-center'>
                <a
                    href='https://freshcon.deno.dev'
                    className='mx-auto my-5 inline-block bg-gradient-to-r from-[#ffc800] via-[#c93636] to-[#9d00ff] rounded-md transition hover:(scale-105)'
                    style={{ padding: '1px' }}
                >
                    <div className='bg-black text-white inline-block px-5 py-3 font-medium transition hover:(bg-transparent scale-105) rounded-md'>
                        Join to the event!
                    </div>
                </a>
            </div>
            <div className='mt-40 mx-20 text-center'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500 w-fit mx-auto mb-10 text-5xl font-black'>
                    Speakers
                </h1>
                {speakers.map((speaker) => (
                    <a
                        href={`https://github.com/${speaker.id}`}
                        target='_blank'
                        class={`w-2/3 xl:w-1/4 rounded-md inline-block p-10 border border-${speaker.color}-500 border-opacity-50 bg-${speaker.color}-500 bg-opacity-30 transition hover:scale-105 m-5`}
                    >
                        <img
                            className={`block w-full rounded-md border border-${speaker.color}-500 border-opacity-50`}
                            src={`https://github.com/${speaker.id}.png`}
                        />
                        <h1 className='mt-10 text-white font-bold text-3xl xl:(text-xl mt-5)'>
                            {speaker.name}
                        </h1>
                        <p
                            className={`text-sm text-white mt-10 border border-${speaker.color}-500 border-opacity-50 rounded-md p-5 bg-${speaker.color}-500 bg-opacity-0 transition hover:bg-opacity-50`}
                        >
                            ❝ {speaker.work} ❞
                        </p>
                    </a>
                ))}
            </div>
        </Provider>
    )
}
