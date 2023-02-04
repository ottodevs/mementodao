export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {/* @ts-expect-error Marquee */}
            <marquee style={{ background: '#fff', color: 'purple' }}>The best web3 app</marquee>
            {children}
        </div>
    )
}
