import {notFound} from 'next/navigation';
import Link from 'next/link';
import {guides} from '@/lib/guides';
import {services} from '@/lib/content';
import {Breadcrumbs,FinalCta} from '@/components/ui';
import {pageMetadata} from '@/lib/site';
export const dynamicParams=false;
export function generateStaticParams(){return guides.map(g=>({slug:g.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const g=guides.find(g=>g.slug===slug);return g?pageMetadata(g.title,g.description,`/orientacoes/${g.slug}`):{};}
export default async function Guide({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const g=guides.find(g=>g.slug===slug);if(!g)notFound();const service=services.find(s=>s.slug===g.service)!;return <><div className="container"><Breadcrumbs items={[{name:'Orientações',href:'/orientacoes'},{name:g.title}]}/><article className="prose guide-article"><h1>{g.title}</h1><p className="lead">{g.description}</p>{g.sections.map(s=><section key={s.title}><h2>{s.title}</h2><p>{s.text}</p></section>)}<p>Consulte o serviço: <Link href={`/${service.slug}`}>{service.name} na Freguesia do Ó</Link>.</p></article></div><FinalCta source={`guide_${g.slug}`} message={service.message}/></>;}
