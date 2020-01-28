# Template for a student web site and blog

## Usage

This is a template set up for students to begin their own web site. The template is created by Chris Jennings and is based on various Jekyll themes.

`Jekyll` is a system for building and editing static web sites; meaning that it does not need a database for the content. Content can be added with a simple text language called `Markdown`. You can explore and learn **Markdown** here:

https://commonmark.org/help/tutorial/

## Configure

Open `_config.yml` in a text editor to change most of the blog's settings.

If a variable in this document is marked as "optional", disable the feature by removing all text from the variable.


### Site configuration
Configure as your own website in `_config.yml`:

```YAML
  baseurl: ""
  url: "https://username.github.io"
```

### Tags configurations

You also need to edit the placeholder site url in the file called _mdwriter.cson. This is at line 34 in that file. This will make it easier to select and re-use tags for your posts.

```YAML
  urlForTags: 'https://yoursite.github.io/tags.json'
```

Please configure this before using the student blog.

### Meta and Branding

Meta variables hold basic information about your Jekyll site which will be used throughout the site and as meta properties for search engines, browsers, and the site's RSS feed.

Change these variables in `_config.yml`:

```yml
title: My Student Blog                 # Name of website
avatar: assets/img/triangle.png        # Path of avatar image, to be displayed in the site header
description: My blog posts             # Short description, primarily used by search engines
```

### Customizing text

#### Footer and Header's text

Customize your site header/footer with these variables in `_config.yml`:

```yml
    header_text: Welcome to my Student blog
    header_feature_image: assets/img/sample3.png
    footer_text: Copyright 2019 - Your Name
```

#### Localisation string

Change localization string variables in `_config.yml`.

English text used in the template has been grouped  so you can quickly change labels to suit your needs.

```yml
     str_follow_on: "Follow on"
     str_rss_follow: "Follow RSS feed"
     str_email: "Email"
     str_next_post: "Next post"
     str_previous_post: "Previous post"
     str_next_page: "Next"
     str_previous_page: "Prev"
     str_continue_reading: "Continue reading"
     str_javascript_required_disqus: "Please enable JavaScript to view comments."
```


### Other features

This site uses a Jekyll framework and so works with [liquid language](https://shopify.github.io/liquid/) tags usually represented by:

```
{{ liquid.tag | filter }}
```

These are useful to render your jekyll files.
You can learn more about them on [shopify's doc](https://help.shopify.com/themes/liquid/basics)

### Footer's icons

Display the site's icon from [Font Awesome](https://fortawesome.github.io/Font-Awesome/) in the footer.
All icon variables should be your username enclosed in quotes (e.g. "username") in `_config.yml`.

### Comments (via Disqus)

Optionally, if you have a [Disqus](https://disqus.com/) account, you can show a comments section below each post.

To enable Disqus comments, add your [Disqus shortname](https://help.disqus.com/customer/portal/articles/466208)
to your project's `_config.yml` file:

```yml
     disqus_shortname: my_disqus_shortname
```

### Google Analytics

To enable Google Analytics, add your [tracking ID](https://support.google.com/analytics/answer/1032385)
to `_config.yml` like so:

```yml
     google_analytics: UA-NNNNNNNN-N
```

### Post excerpt

The [excerpt](https://jekyllrb.com/docs/posts/#post-excerpts) are the first lines of an article that is display on the blog page.
The length of the excerpt has a default of around `250` characters and can be manually set in the post using:

```yml
---
layout: post
title: Sample Page
excerpt_separator: <!--more-->
---

some text in the excerpt
<!--more-->
... rest of the text not shown in the excerpt ...
```

The html is stripped out of the excerpt so it only displays text.

## Layout
Please refer to the [Jekyll docs for writing posts](https://jekyllrb.com/docs/posts/).
Non-standard features are documented below.

### Layout: Post

This are the basic features you can use with the  `post` layout.

```yml
---
layout: post
title: Hello World       			            # Title of the page
date: 2019-08-06
header_feature_image: images/hello.jpg 	 	# Add a feature-image to the post
tags: [holiday, Oxford, life]             # to group the posts
published: false                          # change to true to make live
---
```

### Layout: Page

The _page_ layout has more features explained here.

```yml
---
layout: page
title: "About"
subtitle: "This is a subtitle"  # Optional sub title for the page
header_feature_image: "images/sample.png"
permalink: /about.html          # Set a permalink your your page
hide: true                # Prevent the page title to appear in the navbar
icon: "fa-search"         # Will Display only the fontawesome icon (here: fa-search) and not the title
tags: [sample, markdown, html]
---
```

The *hide* only hides your page from the navigation bar, it is however still generated and can be access through its link.
Use the `_draft` folder to keep files from being generated on your site or put `published: false` in the metadata.

### Layout: Default

This layout includes the head, navigation bar and footer around your content. All pages will use this layout unless you create a different one.

## Special pages

All special pages besides the "home" one are stored in the `pages` folder,
they will appear in the navigation bar unless you set `hide: true` in the front matter.

Here are the documentation for the other feature pages that can be added through `_config.yml`.

### Home

This page is  used as the home page of the template (in the `index.html`). It displays the list of article in `_posts`.
You can use this layout in another page (adding a title to it will make it appear in the navigation bar).

### Search

The search feature is based on [Simple-Jekyll-search](https://github.com/christian-fei/Simple-Jekyll-Search) there is a `search.json` file that will create a list of all of the site posts, pages and portfolios.

Then there's a `search.js` displaying the formatted results entered in the `search.html` page.

The search page can be hidden with the `hide` option. You can remove the icon by removing `icon`:

```yml
---
layout: search
title: Search
icon: "search"
---
```

### Tags

Tags should be placed between `[]` in your post metadata. Separate each tag with a comma.
Tags are recommended for posts and portfolio items.

For example:

```yml
---
layout: post
title: Markdown and HTML
tags: [Oxford, Publishing, Cinema]
---
```

> Tags are case sensitive `Tag_nAme` ≠ `tag_name`

All the tags will be listed in `tags.html` with a link toward the pages or posts.
The Tag page can be hidden with the `hide` option. You can remove the icon by removing `icon` (like for the search page).
