interface Playable {
    void play();
}

class Guitar implements Playable {
    public void play() {
        System.out.println("Playing guitar: strum strum");
    }
}

class Piano implements Playable {
    public void play() {
        System.out.println("Playing piano: plink plonk");
    }
}

public class Main {
    public static void main(String[] args) {
        Playable g = new Guitar();
        Playable p = new Piano();
        g.play();
        p.play();
    }
}
