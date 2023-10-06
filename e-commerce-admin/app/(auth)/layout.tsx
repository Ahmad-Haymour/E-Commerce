export default function AuthLAyout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="grid place-items-center h-full">
            {children}
        </div>
    )
}