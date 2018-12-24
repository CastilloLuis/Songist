<template>
    <div class="container" :id="id" @mouseover="hoverEffect(true, id)" @mouseout="hoverEffect(false, id)">
        <img :src="img" alt="Avatar" class="image">
        <div class="overlay" :ref="'overlayRef'+id">
            <div class="text">
                {{title}}
                <hr/>    
                {{artistName}}
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props: ['img', 'title', 'id', 'artistName'],
    methods: {
        hoverEffect(isHovered, id) {
            console.log('id', id);
            const reference = 'overlayRef'+id;
            let element = this.$refs[reference];
            isHovered ? 
            element.className="overlayEffect" : 
            element.className="overlay"
        }
    }
}
</script>

<style>
.container {
  position: relative;
  width: 80%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  opacity: 0;
}

.overlayEffect {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    transition: .5s ease;
    background: #667db6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

.container:hover .overlayEffect {
  opacity: 0.8;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
