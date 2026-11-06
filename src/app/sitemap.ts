import type {MetadataRoute} from 'next';
import {indexable,origin} from '@/lib/site';
import {services} from '@/lib/content';
import {guides} from '@/lib/guides';
export default function sitemap():MetadataRoute.Sitemap{if(!indexable||!origin)return [];return ['','/sobre','/contato','/regioes-atendidas','/orientacoes','/privacidade',...services.map(s=>`/${s.slug}`),...guides.map(g=>`/orientacoes/${g.slug}`)].map(path=>({url:`${origin}${path}`}));}
