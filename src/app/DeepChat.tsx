"use client";

import dynamic from 'next/dynamic';

const DeepChat = dynamic(() => import('deep-chat-react').then(mod => mod.DeepChat), { ssr: false });

export { DeepChat };
