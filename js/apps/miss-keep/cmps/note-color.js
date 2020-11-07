export default {
    props: ['note'],
    template: `
        <div class="note-color-container" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 24"><path d="M18.58 0c-1.234 0-2.377.616-3.056 1.649-.897 1.37-.854 3.261-1.368 4.444-.741 1.708-3.873.343-5.532-.524-2.909 5.647-5.025 8.211-6.845 10.448 6.579 4.318 1.823 1.193 12.19 7.983 2.075-3.991 4.334-7.367 6.825-10.46-1.539-1.241-4.019-3.546-2.614-4.945 1-1 2.545-1.578 3.442-2.95 1.589-2.426-.174-5.645-3.042-5.645zm-5.348 21.138l-1.201-.763c0-.656.157-1.298.422-1.874-.609.202-1.074.482-1.618 1.043l-3.355-2.231c.531-.703.934-1.55.859-2.688-.482.824-1.521 1.621-2.331 1.745l-1.302-.815c1.136-1.467 2.241-3.086 3.257-4.728l8.299 5.462c-1.099 1.614-2.197 3.363-3.03 4.849zm6.724-16.584c-.457.7-2.445 1.894-3.184 2.632-.681.68-1.014 1.561-.961 2.548.071 1.354.852 2.781 2.218 4.085-.201.265-.408.543-.618.833l-8.428-5.548.504-.883c1.065.445 2.1.678 3.032.678 1.646 0 2.908-.733 3.464-2.012.459-1.058.751-3.448 1.206-4.145 1.206-1.833 3.964-.017 2.767 1.812zm-.644-.424c-.265.41-.813.523-1.22.257-.409-.267-.522-.814-.255-1.223.267-.409.813-.524 1.222-.257.408.266.521.817.253 1.223z"/></svg>                
            <div class="note-colors">
                <span v-for="(color,idx) in colors" :style="{color}" @click="changeColor(color)">
                    ⬤
                </span>
            </div>
        </div>
    `,
    data() {
        return {
            colors:
            {
                'White': '#ffffff',
                'LightYellow': '#FFF8E8',
                'Yellow': '#FCD581',
                'Green': '#7cff6b',
                'Red': '#D52941',
                'DarkRed':'#a02346',
                'Pink': '#ff0084',
                'BlueSky': '#52fefe',
            }
        }
    },
    methods: {
        updateNote(note) {
            this.$emit('update-note', note)
        },
        changeColor(color) {
            this.note.style.backgroundColor = color;
            this.updateNote(this.note);
        }
    },
}