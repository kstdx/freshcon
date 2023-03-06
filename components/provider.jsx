import { Head } from '$fresh/runtime.ts'

export const Provider = (props) => {
    const links = [
        ['Homepage', 'https://fresh.deno.dev', true],
        ['About', '/about'],
        ['Join', '/join']
    ]

    return (
        <>
            <Head>
                <style>{'body{background:black}'}</style>

                <title>{props.title || 'FreshCon'}</title>

                <meta property='og:url' content='https://freshcon.deno.dev' />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={props.title || 'FreshCon'} />
                <meta
                    property='og:description'
                    content={
                        props.description
                            ? props.description.length > 30
                                ? props.description.slice(0, 30) + '...'
                                : props.description
                            : 'Welcome to FreshCon'
                    }
                />
                <meta property='og:site_name' content='FreshCon' />
                <meta
                    property='og:image'
                    content='https://fresh.deno.dev/favicon.ico'
                />

                <link rel='icon' href='https://fresh.deno.dev/favicon.ico' />
            </Head>
            <header className='bg-black bg-opacity-80 shadow-md block xl:(flex sticky top-0) align-middle items-center p-5'>
                <a
                    href='/'
                    className='font-black text-3xl xl:text-xl text-transparent bg-gradient-to-r bg-clip-text from-[#ffc800] via-[#c93636] to-[#9d00ff]'
                >
                    FreshCon
                </a>
                <div className='ml-auto mr-0 block mt-5 text-xl xl:(text-base mt-0) text-slate-200'>
                    {links.map((link) => (
                        <a
                            href={link[1]}
                            className={`my-1 block xl:(mx-3 my-0 inline-block) ${
                                link[2] === true && 'font-bold'
                            }`}
                        >
                            {link[0]}
                        </a>
                    ))}
                </div>
            </header>
            <main className='overflow-x-hidden container px-5 w-full pt-20 mx-auto'>
                {props.children}
                <footer className='text-slate-400 text-center p-20 mt-10'>
                    &copy; 2023 FreshCon
                </footer>
            </main>
        </>
    )
}
