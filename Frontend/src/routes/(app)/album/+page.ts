import type { PageLoad } from './$types';
import { streamAlbum } from '$requests/songs';

/** Awaits nothing: the hero renders at once and the rows fill themselves in. */
export const load: PageLoad = ({ url, fetch }) => {
	const artist = url.searchParams.get('artist')?.trim() ?? '';
	const album = url.searchParams.get('album')?.trim() ?? '';
	if (!artist || !album) return { artist, album, tracks: null };

	return { artist, album, tracks: streamAlbum(artist, album, fetch) };
};
