import SideNav from '@/app/ui/dashboard/sidenav';

// The <Layout /> component receives a children prop. This child can either be a page or another layout. 
// In your case, the pages inside /dashboard will automatically be nested inside a <Layout />
// Can partial rendering
export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className='flex h-screen flex-col md:flex-row md:overlow-hidden'>
            <div className='w-full flex-none md:w-64'>
                {/* Add SideNav page on the right side */}
                <SideNav />
            </div>
            {/* Add children page, the dashboard page under the parent layer */}
            <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
        </div>

    );
}