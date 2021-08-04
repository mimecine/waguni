// Put your application javascript here
window.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll(`nav a[href$='${location.pathname+location.search}']`)
        .forEach(el=>{
            el.parentNode.classList.add('link-current')
        })
})

document.addEventListener('alpine:init', () => {
    Alpine.directive('xmintersect', (el, { expression, modifiers }, { evaluateLater, cleanup }) => {
        let evaluate = evaluateLater(expression)

        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if ( modifiers.includes('in') && entry.isIntersecting && !entry._i) {
                    entry._i = true;
                    console.log(`In on ${entry.target.dataset.handle}`);
                    evaluate();
                }
                else if ( modifiers.includes('out') && !entry.isIntersecting ) {
                    entry._i = false;
                    console.log(`Out on ${entry.target.dataset.handle}`);
                    evaluate();
                }
                else {

                //    if (entry.intersectionRatio === 0) return

                //    evaluate()
      
                }



                modifiers.includes('once') && observer.disconnect()
            })
        })

        observer.observe(el)

        cleanup(() => {
            observer.disconnect()
        })
    })



    Alpine.directive('mintersect', (el, { expression, modifiers }, { evaluateLater, cleanup }) => {
        let evaluate = evaluateLater(expression)
        let options = {
            rootMargin: '-30% 0px'
        }
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if ( modifiers.includes('in') && entry.intersectionRatio >= 0.5 && !entry._i) {
                    entry._i = true;
                    console.log(`In on ${entry.target.dataset.handle}`);
                    evaluate();
                }
                else if ( modifiers.includes('out') && entry.intersectionRatio < 0.5 ) {
                    entry._i = false;
                    console.log(`Out on ${entry.target.dataset.handle}`);
                    evaluate();
                }
                else {

                //    if (entry.intersectionRatio === 0) return

                //    evaluate()
      
                }



                modifiers.includes('once') && observer.disconnect()
            })
        },options)

        observer.observe(el)

        cleanup(() => {
            observer.disconnect()
        })
    })
})


function slideout() {
	return {
		open: false,
		usedKeyboard: false,
		init() {
			this.$watch('open', value => {
				value && this.$refs.closeButton.focus()
				this.toggleOverlay()
			})
			this.toggleOverlay()
		},
		toggleOverlay() {
			document.body.classList[this.open ? 'add' : 'remove']('h-screen', 'overflow-hidden')
		}
	}
}

function sizemodal(){
	return {
		open: false,
		usedKeyboard: false,
		init() {
			this.$watch('open', value => {
				// value && this.$refs.closeButton.focus()
				this.toggleOverlay()
			})
			this.toggleOverlay()
		},
		toggleOverlay() {
			// document.body.classList[this.open ? 'add' : 'remove']('h-screen', 'overflow-hidden')
		}
	}   
}
