/* src/components/Footer.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "../../web_modules/svelte/internal.js";

function create_fragment(ctx) {
	let footer;

	return {
		c() {
			footer = element("footer");
		},
		m(target, anchor) {
			insert(target, footer, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(footer);
		}
	};
}

class Footer extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Footer;
//# sourceMappingURL=Footer.js.map
