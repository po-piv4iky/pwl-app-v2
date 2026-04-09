import { Layout } from "@/components/layout/app-shell/Layout";
import { PropsWithChildren } from "react";


export default function PublicLayout({ children }: PropsWithChildren<unknown>) {
    return (
        <Layout>{children}</Layout>        
    )
}

