<template>
    <div class="md:w-3/5 mt-10">
        <h2 ref="title" class="title">部落格</h2>
    </div>
    <div class="md:w-3/5 mr-auto mb-4 px-6 md:px-0 lg:px-10">
        <section class="py-3 mb-5 md:mb-0 lg:px-8 tracking-wider">
            <ul>
                <li v-for="item in posts" class="rounded-lg p-4 my-2 group">
                    <a :href="item.link" target="_blank">
                        <h3 class="post-title text-hover">
                            <span class="text-md">{{ item.pubDate }} - </span>
                            {{ item.title }}
                        </h3>
                        <br />
                        <span class="post-description">{{ item.description }}</span>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: "Blog",
    data() {
        return {
            content: {}
        }
    },
    created() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            fetch('https://weij0.com/rss.xml')
                .then(response => response.text())
                .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
                .then(data => {
                    this.content = this.xmlToJson(data).rss.channel;
                });
        },
        xmlToJson(xml) {
            var obj = {};

            if (xml.nodeType == 1) {
                if (xml.attributes.length > 0) {
                    obj["@attributes"] = {};
                    for (var j = 0; j < xml.attributes.length; j++) {
                        var attribute = xml.attributes.item(j);
                        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                    }
                }
            } else if (xml.nodeType == 3) {
                obj = xml.nodeValue.trim();
            }

            if (xml.hasChildNodes()) {
                for (var i = 0; i < xml.childNodes.length; i++) {
                    var item = xml.childNodes.item(i);
                    var nodeName = item.nodeName;

                    if (nodeName == "#text") {
                        obj = item.nodeValue.trim();
                    } else if (item.nodeType == 1) {
                        if (typeof (obj[nodeName]) == "undefined") {
                            obj[nodeName] = this.xmlToJson(item);
                        } else {
                            if (typeof (obj[nodeName].push) == "undefined") {
                                var old = obj[nodeName];
                                obj[nodeName] = [];
                                obj[nodeName].push(old);
                            }

                            obj[nodeName].push(this.xmlToJson(item));
                        }
                    }
                }
            }
            return obj;
        }
    },
    computed: {
        posts() {
            const vm = this;
            if (!vm.content.item) return [];

            const posts = vm.content.item;
            posts.forEach(post => {
                post.pubDate = new Date(post.pubDate).toLocaleDateString();

                if (post.description.length > 45)
                    post.description = post.description.substring(0, 45) + '...';

            })

            return posts.filter((post, index) => index < 5);
        }
    }
}
</script>

<style>
    .post-title{
        @apply text-lg inline-block font-bold text-primary after:border-primary        
    }
    .post-description {
        @apply text-sm text-gray-600
    }
</style>