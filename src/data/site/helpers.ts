import type {Locale} from './types';

export type LocalizedContent<Content> = Record<Locale, Content>;

export const defineLocalizedContent = <Content>(
  content: LocalizedContent<Content>
) => content;
