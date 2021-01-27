import type { Post, Hydrator } from 'pigeon-generator';

export function assert<T>(value?: T): T {
  return (value as unknown) as T;
}

export const formatUserContent = (content = ''): string => {
  // const mentionPattern = /\b@(\w+)\b/g;
  // let match: RegExpMatchArray | null;
  // while ((match = mentionPattern.exec(post.content)) !== null) {
  //   console.log(match);
  // }

  return content
    .replace(/\n/g, '<br />')
    .replace(/(?<=\b|\s|^)@(\w+)(?=\b|\s|$)/g, '<a href="#/user/$1">@$1</a>');
};
