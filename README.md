# Rails - Vue - Turbolinks Starterkit

## Quick Start

```
git clone https://github.com/sadikay/rails-vue-starterkit.git
```

* Run `bundle install`
* Run `yarn install`
* Update database configrations in `config/database.yml`
* `bundle exec rake db:create`
* `rails s`

### Example Usage
**javascript/components/user_info.vue**
```vue
<template>
  <div>
    <p>{{ userName }} {{userLastName}}</p>
  </div>
</template>

<script>
  export default {
    props: ['user'],

    data: function () {
      return {
        userName: this.user.name,
        userLastName: this.user.last_name
      }
    }
  }
</script>
```

**javascript/packs/application.js**
```
...
import DisplayUserInfo from '../components/user_info.vue'
Vue.component('display-user-info', DisplayUserInfo);
```

**index.html.erb**

We supppose to `@user` instance have accessible fields `name` and `last_name`.
```erb
<display-user-info :user="<%= @user.to_json %>"></display-user-info>
```

## Versions
* Ruby 2.5.1
* Rails ~> 5.2.1
* Vue ^2.5.17
* vue-turbolinks ^2.0.3
