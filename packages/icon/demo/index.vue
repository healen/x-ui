<template>
  <demo-section>
    <demo-block title="现有图标">
      <ul>
        <li v-for="i in iconlist">
          <div>
            <x-icon :name="i"></x-icon>
            <p>{{i}}</p>
          </div>

        </li>
      </ul>

    </demo-block>
  </demo-section>
</template>
<script>
  import demoSection from '../../common/demoSection'
  import demoBlock from '../../common/demoBlock'
  import iconlist from './icon_list'

  export default {
    name: "index",
    components:{
      demoSection,
      demoBlock
    },
    computed:{
      iconlist(){
        return iconlist
      }
    }
  }
</script>

<style scoped lang="less">

  ul{
    display: flex;
    flex-wrap: wrap;
    li{
      transition: all .5s;
      width: 33.3%;
      color: #555;
      /*border:1px solid #cccccc;*/
      display: flex;
      box-sizing: border-box;
      div{
        margin: 1rem 0;
        width: 100%;
        display: inline;
        text-align: center;
      }
      .x-icon{
        font-size: 4rem;
        display: inline-block;
        margin-bottom: 1rem;
      }
      transform: scale(1);
      &:hover{
        color: #ff0000;
      }
    }
  }


</style>