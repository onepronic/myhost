<script type="text/javascript">
      let count = 5;
      let counter = setInterval(timer, 1000);

      function timer() {
        count = count - 1;
        if (count <= 0) {
          document.getElementById('arilia-wait1').style.display = 'none';
          document.getElementById('arilia-generate').style.display = 'block';
          clearInterval(counter);
          return;
        }
        document.getElementById("arilia-time").innerHTML = count;
      }

      function ariliagenerate() {
        document.getElementById('arilia').focus();
        document.getElementById('arilia-link').style.display = 'none';
        document.getElementById('arilia-wait2').style.display = 'block';
        setInterval(function() {
          document.getElementById('arilia-wait2').style.display = 'none';
        }, 30000);
        setInterval(function() {
          document.getElementById('arilia-link').style.display = 'block';
        }, 2000);
      }
    </script>
