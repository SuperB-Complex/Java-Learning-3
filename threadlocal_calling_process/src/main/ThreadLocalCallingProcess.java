package main;

import java.io.IOException;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;


public class ThreadLocalCallingProcess {

    public static void main(String[] args) {
        OAuthTokenContext tokenContext = new OAuthTokenContext();
        for (int i = 1; i <= 50; i++) {
            new Thread(() -> tokenContext.execute(Thread.currentThread().getName())).start();
        }

        new Thread(() -> {

            tokenContext.execute(Thread.currentThread().getName());
            tokenContext.execute(Thread.currentThread().getName());
            tokenContext.execute(Thread.currentThread().getName());
            tokenContext.execute(Thread.currentThread().getName());
            tokenContext.execute(Thread.currentThread().getName());

        }).start();

    }

}

class OAuthTokenContext {

    private final Context authTokenContext = new Context(new AuthenticationService());


    public void execute(String message)  {
        System.out.println(" Message is " + message + ", token is " + authTokenContext.get());
    }

    static class Context {
        private static ThreadLocal<Long> THREAD_CONTEXT;
//        private static AtomicLong index = new AtomicLong(0);
        private AtomicLong index = new AtomicLong(0);

        public Context(AuthenticationService authenticationService) {
//            THREAD_CONTEXT = ThreadLocal.withInitial(() -> authenticationService.getAuthToken());
            THREAD_CONTEXT = ThreadLocal.withInitial(() -> {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                return index.getAndIncrement();});
        }

//        public void set(AuthenticationService authenticationService) {
//            THREAD_CONTEXT.set(authenticationService.getAuthToken());
//        }

//        public String get() {
//            return (String) THREAD_CONTEXT.get();
//        }

        public Long get() {
            return THREAD_CONTEXT.get();
        }

    }

    final class AuthenticationService {
        private AtomicLong index = new AtomicLong(0);

//        private String authToken() throws IOException {
//            return UUID.randomUUID().toString();
//        }

        private Long authToken() throws IOException, InterruptedException {
            Thread.sleep(1000);
            return this.index.getAndIncrement();
        }

//        public String getAuthToken() {
//            AtomicInteger retryCount = new AtomicInteger(1);
////            while (true) {
////                try {
////                    synchronized (AuthenticationService.class) {
////                        return authToken();
////                    }
////                } catch (Exception e) {
////                    System.out.println(e);
////                }
////            }
//
//            return UUID.randomUUID().toString();
//        }

        public Long getAuthToken() {
            Long token = new Long(-1);
            try {
                token = authToken();
            } catch (IOException | InterruptedException e) {
                e.printStackTrace();
            }
            return token;
        }
    }
}

